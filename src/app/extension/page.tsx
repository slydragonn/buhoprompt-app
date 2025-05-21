import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BellRing, CheckCircle, Code, Download, Globe, Laptop, Puzzle } from 'lucide-react';
import {
  FaChrome as Chrome,
  FaFirefox as Firefox,
  FaEdge as Edge,
  FaSafari as Safari,
} from 'react-icons/fa';
import Header from '@/components/landing/layout/header';

export default function ExtensionPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <Badge className='bg-gray-700/20 text-primary border-none px-3 py-1 text-sm'>
                  Próximamente
                </Badge>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                  Extensión de BuhoPrompt
                </h1>
                <p className='mx-auto max-w-[700px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Lleva el poder del prompt engineering a cualquier sitio web. Optimiza tus prompts
                  directamente donde los necesites.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex space-x-2'>
                  <Input className='max-w-lg flex-1 ' placeholder='Ingresa tu email' type='email' />
                  <Button type='submit'>Notifícame</Button>
                </form>
                <p className='text-xs text-gray-500'>
                  Recibe una notificación cuando la extensión esté disponible. No enviamos spam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900/20 dark:from-gray-900 to-background'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Una vista previa de lo que viene
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Nuestra extensión para navegadores te permitirá utilizar BuhoPrompt en cualquier
                  sitio web que utilice modelos de IA.
                </p>
              </div>
            </div>
            <div className='mx-auto mt-16 grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2'>
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li className='flex items-start gap-4'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                      <Puzzle className='h-5 w-5 text-primary' />
                    </div>
                    <div className='space-y-1'>
                      <h3 className='text-xl font-medium'>Integración perfecta</h3>
                      <p className='text-muted-foreground'>
                        La extensión se integra directamente con ChatGPT, Claude, Bard y otras
                        interfaces de IA, permitiéndote optimizar tus prompts sin cambiar de
                        pestaña.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                      <Code className='h-5 w-5 text-primary' />
                    </div>
                    <div className='space-y-1'>
                      <h3 className='text-xl font-medium'>Acceso a tus plantillas</h3>
                      <p className='text-muted-foreground'>
                        Accede a todas tus plantillas y prompts guardados directamente desde la
                        extensión, sin necesidad de copiar y pegar.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                      <Laptop className='h-5 w-5 text-primary' />
                    </div>
                    <div className='space-y-1'>
                      <h3 className='text-xl font-medium'>Asistente IA incorporado</h3>
                      <p className='text-muted-foreground'>
                        Recibe sugerencias en tiempo real para mejorar tus prompts mientras escribes
                        en cualquier plataforma de IA.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-xl'>
                <div className='flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-3'>
                  <div className='flex items-center gap-2'>
                    <div className='h-3 w-3 rounded-full bg-red-500' />
                    <div className='h-3 w-3 rounded-full bg-yellow-500' />
                    <div className='h-3 w-3 rounded-full bg-green-500' />
                  </div>
                  <div className='flex items-center rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-400'>
                    <Globe className='mr-2 h-3.5 w-3.5' />
                    chat.openai.com
                  </div>
                  <div className='w-16' />
                </div>
                <div className='p-6 text-white'>
                  <div className='mb-6 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <Image src='/buhoprompt-logo-dark.svg' alt='Logo' width={30} height={30} />
                      <span className='font-medium'>BuhoPrompt</span>
                    </div>
                    <Badge variant='outline' className='border-primary/50 text-primary'>
                      Beta
                    </Badge>
                  </div>
                  <div className='space-y-4'>
                    <div className='rounded-lg bg-gray-800 p-4'>
                      <h4 className='mb-2 text-sm font-medium'>Plantillas disponibles</h4>
                      <div className='space-y-2'>
                        <div className='rounded bg-gray-700 p-2 text-xs'>
                          Desarrollo de software
                        </div>
                        <div className='rounded bg-gray-700 p-2 text-xs'>Creación de contenido</div>
                        <div className='rounded bg-gray-700 p-2 text-xs'>Análisis de datos</div>
                      </div>
                    </div>
                    <div className='rounded-lg bg-gray-800 p-4'>
                      <h4 className='mb-2 text-sm font-medium'>Optimizador de prompts</h4>
                      <div className='space-y-2'>
                        <div className='h-2 w-3/4 rounded bg-gray-700'></div>
                        <div className='h-2 w-full rounded bg-gray-700'></div>
                        <div className='h-2 w-2/3 rounded bg-gray-700'></div>
                      </div>
                      <Button size='sm' className='mt-3 w-full'>
                        Optimizar prompt
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Support */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Compatible con tus navegadores favoritos
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  La extensión de BuhoPrompt estará disponible para los principales navegadores.
                </p>
              </div>
            </div>
            <div className='mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4'>
              <Card className='flex flex-col items-center justify-center p-6 text-center'>
                <Chrome className='h-12 w-12 mb-4 text-[#4285F4]' />
                <CardContent className='p-0'>
                  <h3 className='text-lg font-medium'>Chrome</h3>
                  <p className='text-sm text-muted-foreground'>Próximamente</p>
                </CardContent>
              </Card>
              <Card className='flex flex-col items-center justify-center p-6 text-center'>
                <Firefox className='h-12 w-12 mb-4 text-[#FF9500]' />
                <CardContent className='p-0'>
                  <h3 className='text-lg font-medium'>Firefox</h3>
                  <p className='text-sm text-muted-foreground'>Próximamente</p>
                </CardContent>
              </Card>
              <Card className='flex flex-col items-center justify-center p-6 text-center'>
                <Edge className='h-12 w-12 mb-4 text-[#0078D7]'>
                  <path d='M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801' />
                </Edge>
                <CardContent className='p-0'>
                  <h3 className='text-lg font-medium'>Edge</h3>
                  <p className='text-sm text-muted-foreground'>Próximamente</p>
                </CardContent>
              </Card>
              <Card className='flex flex-col items-center justify-center p-6 text-center'>
                <Safari className='h-12 w-12 mb-4 text-[#0FB5EE]'>
                  <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z' />
                  <path d='M13 7h-2v6h6v-2h-4z' />
                </Safari>
                <CardContent className='p-0'>
                  <h3 className='text-lg font-medium'>Safari</h3>
                  <p className='text-sm text-muted-foreground'>Próximamente</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900/20 dark:from-gray-900 to-background'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Características principales
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Descubre todo lo que podrás hacer con la extensión de BuhoPrompt.
                </p>
              </div>
            </div>
            <div className='mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3'>
              <Card>
                <CardContent className='pt-6'>
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <Download className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-lg font-medium'>Acceso instantáneo</h3>
                  <p className='mt-2 text-muted-foreground'>
                    Accede a tu biblioteca de prompts y plantillas con un solo clic, sin necesidad
                    de cambiar entre pestañas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='pt-6'>
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <BellRing className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-lg font-medium'>Sincronización automática</h3>
                  <p className='mt-2 text-muted-foreground'>
                    Todos tus prompts se sincronizan automáticamente entre la extensión y la
                    plataforma web de BuhoPrompt.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='pt-6'>
                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <CheckCircle className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-lg font-medium'>Optimización en tiempo real</h3>
                  <p className='mt-2 text-muted-foreground'>
                    Recibe sugerencias y mejoras para tus prompts mientras escribes en cualquier
                    plataforma compatible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Sé el primero en probarla
                </h2>
                <p className='mx-auto max-w-[700px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Regístrate ahora para recibir una notificación cuando la extensión esté disponible
                  y obtén acceso prioritario a la versión beta.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex space-x-2'>
                  <Input className='max-w-lg flex-1' placeholder='Ingresa tu email' type='email' />
                  <Button type='submit'>Unirme</Button>
                </form>
                <p className='text-xs text-gray-500'>
                  Al registrarte, aceptas recibir emails relacionados con la extensión de
                  BuhoPrompt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='w-full border-t'>
        <div className='container flex flex-col md:flex-row items-center justify-between py-6'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} BuhoPrompt. Todos los derechos reservados.
          </p>
          <nav className='flex items-center gap-4 text-sm font-medium'>
            <Link href='#' className='text-muted-foreground hover:text-primary'>
              Términos de Servicio
            </Link>
            <Link href='#' className='text-muted-foreground hover:text-primary'>
              Política de Privacidad
            </Link>
            <Link href='/contacto' className='text-muted-foreground hover:text-primary'>
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
