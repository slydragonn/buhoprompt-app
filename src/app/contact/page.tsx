import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import Header from '@/components/landing/layout/header';

export default function ContactoPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Contacto
                </h1>
              </div>
            </div>

            <div className='mx-auto max-w-3xl mt-16'>
              <Card className='overflow-hidden border-2 border-purple-700/20 py-0'>
                <div className='md:flex'>
                  <div className='md:w-1/3 bg-gradient-to-b from-purple-700/20 dark:from-purple-700/10 to-purple-700/5 dark:to-neutral-900 p-6 flex flex-col items-center justify-center'>
                    <div className='relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mb-4'>
                      <Image
                        src='/alg.jpg'
                        alt='Alejandro Londoño'
                        width={320}
                        height={320}
                        className='object-cover'
                      />
                    </div>
                    <h2 className='text-xl font-bold'>Alejandro Londoño</h2>
                    <p className='text-muted-foreground text-sm mt-1'>Desarrollador FullStack</p>
                  </div>

                  <div className='p-8 md:w-2/3'>
                    <div className='space-y-6'>
                      <div>
                        <h3 className='text-xl font-semibold mb-3'>
                          ¿Tienes alguna pregunta o sugerencia?
                        </h3>
                        <p className='text-muted-foreground'>
                          Me encantaría conocer tu experiencia con BuhoPrompt. Si tienes dudas sobre
                          cómo utilizar la plataforma, ideas para nuevas funcionalidades, o
                          simplemente quieres compartir tu feedback. ¡No dudes en ponerte en
                          contacto conmigo!
                        </p>
                      </div>

                      <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Conéctate conmigo</h3>
                        <div className='flex flex-wrap gap-3'>
                          <Button variant='outline' className='gap-2' asChild>
                            <a
                              href='https://github.com/slydragonn'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <Github className='h-5 w-5' />
                              <span>GitHub</span>
                            </a>
                          </Button>
                          <Button variant='outline' className='gap-2' asChild>
                            <a
                              href='https://linkedin.com/in/alejolg'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <Linkedin className='h-5 w-5' />
                              <span>LinkedIn</span>
                            </a>
                          </Button>
                          <Button variant='outline' className='gap-2' asChild>
                            <a href='mailto:slydragonn@gmail.com'>
                              <Mail className='h-5 w-5' />
                              <span>Email</span>
                            </a>
                          </Button>
                          <Button variant='outline' className='gap-2' asChild>
                            <a
                              href='https://alogocode.site/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <Globe className='h-5 w-5' />
                              <span>Portfolio</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className='mt-16 text-center'>
                <h2 className='text-2xl font-bold mb-6'>Preguntas frecuentes</h2>
                <p className='text-muted-foreground mb-4'>
                  ¿Tienes alguna pregunta común? Consulta nuestra sección de documentación donde
                  encontrarás respuestas a las preguntas más frecuentes.
                </p>
                <Button asChild>
                  <Link href='/docs'>Ver documentación</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='w-full border-t bg-background'>
        <div className='container flex flex-col md:flex-row items-center justify-between py-6'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} BuhoPrompt. Todos los derechos reservados.
          </p>
          <nav className='flex items-center gap-4 text-sm font-medium'>
            <Link href='#' className='hover:underline underline-offset-4'>
              Términos de Servicio
            </Link>
            <Link href='#' className='hover:underline underline-offset-4'>
              Política de Privacidad
            </Link>
            <Link href='/contact' className='hover:underline underline-offset-4'>
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
