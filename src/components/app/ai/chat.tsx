'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Loader2, Send, Sparkles, User, Bot, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

type MessageStatus = 'pending' | 'accepted' | 'rejected';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  status?: MessageStatus;
}

interface AiChatProps {
  promptContent: string;
  onApplySuggestion: (suggestion: string) => void;
  className?: string;
}

export default function AiChat({
  promptContent,
  onApplySuggestion,
  className,
}: Readonly<AiChatProps>) {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingSuggestion, setPendingSuggestion] = useState<{
    content: string;
    messageId: string;
  } | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }
    }
  }, [messages]);

  const sendMessage = async (content: string, type: 'question' | 'improve' = 'question') => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          promptContext: promptContent,
          type,
          conversationHistory: messages.slice(-4),
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Limite de tokens alcanzado');
        }

        throw new Error('Error al comunicarse con la IA');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: type === 'improve' ? 'Mejora sugerida - Revisar propuesta' : data.response,
        timestamp: new Date(),
        status: type === 'improve' ? 'pending' : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (type === 'improve' && data.improvedPrompt) {
        setPendingSuggestion({
          content: data.improvedPrompt,
          messageId: assistantMessage.id,
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      let errorMessage =
        'Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.';

      if ((error as Error).message === 'Limite de tokens alcanzado') {
        errorMessage =
          'Lo siento, se ha alcanzado el límite de tokens. Por favor, intenta de nuevo más tarde.';
      }
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: errorMessage,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleImprovePrompt = () => sendMessage(inputValue || 'Mejora este prompt', 'improve');

  const handleApplySuggestion = () => {
    if (pendingSuggestion) {
      onApplySuggestion(pendingSuggestion.content);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === pendingSuggestion.messageId
            ? { ...msg, status: 'accepted', content: 'Mejora aprobada ✅' }
            : msg
        )
      );
      setPendingSuggestion(null);
    }
  };

  const handleRejectSuggestion = () => {
    if (pendingSuggestion) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === pendingSuggestion.messageId
            ? { ...msg, status: 'rejected', content: 'Mejora rechazada ❌' }
            : msg
        )
      );
      setPendingSuggestion(null);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className={className}>
          <Sparkles className='w-4 h-4 mr-2' />
          Asistente IA
        </Button>
      </SheetTrigger>

      <SheetContent className='flex flex-col h-full'>
        <SheetHeader className='border-b p-4'>
          <SheetTitle className='flex items-center gap-2 text-lg'>
            <Sparkles className='w-5 h-5' />
            Asistente IA
          </SheetTitle>
        </SheetHeader>

        <div className='flex-1 flex flex-col overflow-hidden'>
          <ScrollArea ref={scrollAreaRef} className='flex-1 overflow-y-auto p-4'>
            <div className='space-y-4 min-h-full'>
              {messages.length === 0 && (
                <div className='text-center text-muted-foreground py-8 h-full flex flex-col justify-center'>
                  <Bot className='w-12 h-12 mx-auto mb-4 opacity-50' />
                  <p className='text-sm'>
                    ¡Hola! Puedo ayudarte a mejorar tu prompt o responder preguntas sobre él.
                  </p>
                  <Button
                    variant='outline'
                    size='sm'
                    className='mt-4 mx-auto'
                    onClick={handleImprovePrompt}
                    disabled={!promptContent.trim()}
                  >
                    <Sparkles className='w-4 h-4 mr-2' />
                    Mejorar prompt
                  </Button>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'flex gap-3 max-w-[80%]',
                      message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    )}
                  >
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary'
                      )}
                    >
                      {message.role === 'user' ? (
                        <Avatar>
                          <AvatarImage src={user?.imageUrl} />{' '}
                          <AvatarFallback>
                            <User className='w-4 h-4' />
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <Bot className='w-4 h-4' />
                      )}
                    </div>
                    <div
                      className={cn(
                        'rounded-lg px-4 py-2 text-sm',
                        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted',
                        message.status === 'accepted' && 'bg-green-100 dark:bg-green-900',
                        message.status === 'rejected' && 'bg-red-100 dark:bg-red-900'
                      )}
                    >
                      <p className='whitespace-pre-wrap'>
                        {message.content}
                        {message.status === 'pending' && (
                          <Badge variant='secondary' className='ml-2'>
                            Pendiente
                          </Badge>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className='flex justify-start'>
                  <div className='flex gap-3'>
                    <div className='w-8 h-8 rounded-full bg-secondary flex items-center justify-center'>
                      <Bot className='w-4 h-4' />
                    </div>
                    <div className='bg-muted rounded-lg px-4 py-2'>
                      <Loader2 className='w-4 h-4 animate-spin' />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className='p-4 border-t'>
            <div className='flex gap-2'>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Pregunta algo sobre el prompt...'
                disabled={isLoading}
                className='flex-1'
              />
              <Button type='submit' size='icon' disabled={!inputValue.trim() || isLoading}>
                <Send className='w-4 h-4' />
              </Button>
              {promptContent.trim() && (
                <Button
                  type='button'
                  variant='outline'
                  size='icon'
                  onClick={handleImprovePrompt}
                  disabled={isLoading}
                  title='Mejorar prompt'
                >
                  <Sparkles className='w-4 h-4' />
                </Button>
              )}
            </div>
          </form>
        </div>

        <AlertDialog
          open={!!pendingSuggestion}
          onOpenChange={(open) => !open && setPendingSuggestion(null)}
        >
          <AlertDialogContent className='max-h-[80vh] flex flex-col'>
            <AlertDialogHeader>
              <AlertDialogTitle>Propuesta de mejora</AlertDialogTitle>
            </AlertDialogHeader>
            <ScrollArea className='flex-1 px-4 overflow-y-auto max-h-4/5'>
              <p className='whitespace-pre-wrap text-sm'>{pendingSuggestion?.content}</p>
            </ScrollArea>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleRejectSuggestion}>
                <X className='w-4 h-4 mr-2' />
                Rechazar
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleApplySuggestion}>
                <Check className='w-4 h-4 mr-2' />
                Aceptar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SheetContent>
    </Sheet>
  );
}
