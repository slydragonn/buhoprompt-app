'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Rocket, BookOpen } from 'lucide-react';

export default function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomeDialog');

    // Only show on first visit
    if (!hasSeenWelcome) {
      // Show the dialog after a small delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Set the flag in localStorage to prevent showing again
    localStorage.setItem('hasSeenWelcomeDialog', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Sparkles className='h-5 w-5 text-blue-500' />
            ¡Bienvenido a BuhoPrompt!
          </DialogTitle>
          <DialogDescription>
            Nos alegra verte por aquí. Tu centro de trabajo está listo para potenciar tu
            productividad.
          </DialogDescription>
        </DialogHeader>

        <div className='flex flex-col space-y-4 py-4'>
          <div className='flex items-start space-x-3'>
            <div className='mt-0.5'>
              <Rocket className='h-5 w-5 text-green-500' />
            </div>
            <div>
              <h4 className='text-sm font-medium'>Crea nuevos prompts</h4>
              <p className='text-sm text-gray-500'>
                Organiza tus ideas y aumenta tu flujo de trabajo con prompts personalizados.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <div className='mt-0.5'>
              <BookOpen className='h-5 w-5 text-purple-500' />
            </div>
            <div>
              <h4 className='text-sm font-medium'>Gestiona tus templates</h4>
              <p className='text-sm text-gray-500'>
                Crea templates para reutilizar tus mejores flujos de trabajo una y otra vez.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button className='w-full' onClick={handleClose}>
            Comenzar a explorar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
