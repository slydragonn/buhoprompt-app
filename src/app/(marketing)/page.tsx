import Header from '@/components/landing/layout/header';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BrainCircuit,
  Code,
  FileText,
  Lightbulb,
  MessageSquareText,
  Sparkles,
  Star,
  Zap,
  CheckCircle,
  Layers,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-24 md:py-32 lg:py-40'>
          <div className='container px-4 md:px-6 flex flex-col items-center text-center'>
            <Image src='/buhoprompt-logo-dark.svg' alt='logo' width={150} height={150} />
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6'>
              Haz magia con ideas simples
            </h1>
            <p className='max-w-[600px] text-neutral-500 md:text-xl mb-8'>
              Crea, almacena, edita y perfecciona prompts para diferentes modelos de IA con
              herramientas profesionales diseñadas para maximizar el potencial de la inteligencia
              artificial.
            </p>
            <Button size='lg' asChild className='rounded-md'>
              <Link href='/app/dashboard'>Ir a la App</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id='caracteristicas' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Funcionalidades Principales
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Herramientas avanzadas para dominar el arte del prompt engineering
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='border-2 border-primary/20'>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <FileText className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Generador de Prompts</h3>
                  <p className='text-muted-foreground'>
                    Crea prompts optimizados según plantillas específicas para diferentes casos de
                    uso y modelos de IA.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <MessageSquareText className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Editor en Tiempo Real</h3>
                  <p className='text-muted-foreground'>
                    Edita tus prompts con un chat integrado con IA para perfeccionarlos al instante.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Layers className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Plantillas Personalizadas</h3>
                  <p className='text-muted-foreground'>
                    Crea y almacena tus propias plantillas para reutilizarlas en diferentes
                    proyectos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id='como-funciona'
          className='w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Cómo Funciona
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Optimiza tus interacciones con IA en tres simples pasos
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-white'>
                  <span className='text-2xl font-bold'>1</span>
                </div>
                <h3 className='text-xl font-bold'>Selecciona una Plantilla</h3>
                <p className='text-muted-foreground'>
                  Elige entre una variedad de plantillas prediseñadas para diferentes casos de uso o
                  crea la tuya propia.
                </p>
                <div className='relative mt-4 aspect-video w-full overflow-hidden rounded-lg border'>
                  <Image
                    src='/templates-select.png'
                    alt='Selección de plantilla'
                    width={400}
                    height={225}
                    className='h-full w-full object-cover'
                  />
                </div>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-white'>
                  <span className='text-2xl font-bold'>2</span>
                </div>
                <h3 className='text-xl font-bold'>Edita y Perfecciona</h3>
                <p className='text-muted-foreground'>
                  Utiliza nuestro editor avanzado y el asistente de IA para mejorar tus prompts en
                  tiempo real.
                </p>
                <div className='relative mt-4 aspect-video w-full overflow-hidden rounded-lg border'>
                  <Image
                    src='/prompt-edit.png'
                    alt='Editor de prompts'
                    width={400}
                    height={225}
                    className='h-full w-full object-cover'
                  />
                </div>
              </div>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-white'>
                  <span className='text-2xl font-bold'>3</span>
                </div>
                <h3 className='text-xl font-bold'>Guarda y Reutiliza</h3>
                <p className='text-muted-foreground'>
                  Almacena tus prompts optimizados para usarlos en el futuro o compartirlos con tu
                  equipo.
                </p>
                <div className='relative mt-4 aspect-video w-full overflow-hidden rounded-lg border'>
                  <Image
                    src='/prompt-save.png'
                    alt='Guardar prompts'
                    width={400}
                    height={225}
                    className='h-full w-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section id='transformacion' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Transforma tus Prompts
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Mira la diferencia entre un prompt básico y uno optimizado con BuhoPrompt
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl py-12'>
              <Tabs defaultValue='before' className='w-full'>
                <TabsList className='grid w-full grid-cols-2'>
                  <TabsTrigger value='before'>Prompt Original</TabsTrigger>
                  <TabsTrigger value='after'>Prompt Optimizado</TabsTrigger>
                </TabsList>
                <TabsContent
                  value='before'
                  className='mt-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm'
                >
                  <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                      <div className='h-8 w-8 rounded-full bg-muted flex items-center justify-center'>
                        <span className='text-sm font-medium'>1</span>
                      </div>
                      <h3 className='text-lg font-semibold'>Prompt Original</h3>
                    </div>
                    <div className='rounded-md bg-muted p-4 font-mono text-sm'>
                      <p>Crea una aplicación TODO</p>
                    </div>
                    <div className='mt-4 rounded-md bg-destructive/10 p-4 text-sm'>
                      <h4 className='font-medium text-destructive'>Problemas:</h4>
                      <ul className='mt-2 list-inside list-disc space-y-1 text-muted-foreground'>
                        <li>Falta de especificidad y detalles técnicos</li>
                        <li>No menciona tecnologías o frameworks a utilizar</li>
                        <li>No incluye requisitos funcionales claros</li>
                        <li>Sin consideraciones de arquitectura o escalabilidad</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value='after'
                  className='mt-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm'
                >
                  <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                      <div className='h-8 w-8 rounded-full bg-purple-700/20 flex items-center justify-center'>
                        <CheckCircle className='h-5 w-5 text-primary' />
                      </div>
                      <h3 className='text-lg font-semibold'>Prompt Optimizado</h3>
                    </div>
                    <div className='rounded-md bg-purple-700/20 p-4 font-mono text-sm'>
                      <p>
                        Desarrolla una aplicación TODO completa utilizando React para el frontend y
                        Python con FastAPI para el backend. La aplicación debe permitir a los
                        usuarios crear, leer, actualizar y eliminar tareas. Prioriza la
                        mantenibilidad, la escalabilidad y la seguridad.
                      </p>
                      <p className='mt-2'>**Especificaciones Técnicas:**</p>
                      <ul className='mt-1 list-inside list-disc space-y-1'>
                        <li>**Frontend:** React (v18.x), Redux Toolkit (v1.x)</li>
                        <li>**UI:** Material UI (v5.x)</li>
                        <li>**Backend:** Python con FastAPI, PostgreSQL</li>
                        <li>**Autenticación:** JWT con refresh tokens</li>
                        <li>**Testing:** Jest (v29.x) y React Testing Library (v13.x)</li>
                        <li>**Bundler:** Vite (v4.x)</li>
                      </ul>
                    </div>
                    <div className='mt-4 rounded-md bg-green-700/20 p-4 text-sm'>
                      <h4 className='font-medium text-primary'>Mejoras:</h4>
                      <ul className='mt-2 list-inside list-disc space-y-1 text-muted-foreground'>
                        <li>Especificación clara de tecnologías y versiones</li>
                        <li>Definición de requisitos funcionales</li>
                        <li>Consideraciones de arquitectura y escalabilidad</li>
                        <li>Inclusión de aspectos de seguridad y testing</li>
                        <li>Estructura organizada y fácil de seguir</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Templates Showcase */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Plantillas Especializadas
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Accede a plantillas diseñadas para diferentes casos de uso
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <BrainCircuit className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Investigación</h3>
                  <p className='text-muted-foreground'>
                    Plantillas para generar prompts de investigación académica con rigor
                    metodológico.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Code className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Programación</h3>
                  <p className='text-muted-foreground'>
                    Optimiza tus prompts para desarrollo de software y resolución de problemas
                    técnicos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Lightbulb className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Creatividad</h3>
                  <p className='text-muted-foreground'>
                    Plantillas para escritura creativa, diseño y generación de contenido visual.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Sparkles className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Marketing</h3>
                  <p className='text-muted-foreground'>
                    Crea prompts para generar contenido de marketing efectivo y persuasivo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Zap className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Productividad</h3>
                  <p className='text-muted-foreground'>
                    Plantillas para automatizar tareas y optimizar flujos de trabajo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Star className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Personalizado</h3>
                  <p className='text-muted-foreground'>
                    Crea tus propias plantillas adaptadas a tus necesidades específicas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                    Asistente IA Integrado
                  </h2>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Recibe sugerencias en tiempo real para mejorar tus prompts y maximizar los
                    resultados de tus interacciones con IA.
                  </p>
                  <ul className='mt-6 space-y-3'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='mt-1 h-5 w-5 text-primary flex-shrink-0' />
                      <span>Análisis de la estructura y claridad de tus prompts</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='mt-1 h-5 w-5 text-primary flex-shrink-0' />
                      <span>Sugerencias para mejorar la especificidad y el contexto</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='mt-1 h-5 w-5 text-primary flex-shrink-0' />
                      <span>
                        Recomendaciones basadas en las mejores prácticas de prompt engineering
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='mt-1 h-5 w-5 text-primary flex-shrink-0' />
                      <span>Adaptación a diferentes modelos de IA y casos de uso</span>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button asChild>
                    <Link href='/app/dashboard'>Probar Asistente IA</Link>
                  </Button>
                </div>
              </div>
              <div className='relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background p-2 shadow-lg'>
                <Image
                  src='/prompt-ai.png'
                  alt='Asistente IA de BuhoPrompt'
                  width={600}
                  height={400}
                  className='w-full object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id='precios' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Planes y Precios
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  Elige el plan que mejor se adapte a tus necesidades
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3'>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 space-y-2'>
                    <h3 className='text-2xl font-bold'>Básico</h3>
                    <p className='text-muted-foreground'>Para usuarios individuales</p>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-3xl font-bold'>Gratis</span>
                    </div>
                  </div>
                  <ul className='mb-6 space-y-2'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Hasta 10 prompts</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Plantillas básicas</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Editor de prompts</span>
                    </li>
                  </ul>
                  <Button className='w-full' asChild>
                    <Link href='#registro'>Comenzar Gratis</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className='border-2 border-primary'>
                <CardContent className='p-6'>
                  <div className='mb-4 space-y-2'>
                    <div className='inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary'>
                      Popular
                    </div>
                    <h3 className='text-2xl font-bold'>Pro</h3>
                    <p className='text-muted-foreground'>Para profesionales</p>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-3xl font-bold'>$9.99</span>
                      <span className='text-muted-foreground'>/mes</span>
                    </div>
                  </div>
                  <ul className='mb-6 space-y-2'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Prompts ilimitados</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Todas las plantillas</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Asistente IA avanzado</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Plantillas personalizadas</span>
                    </li>
                  </ul>
                  <Button className='w-full'>Suscribirse</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6'>
                  <div className='mb-4 space-y-2'>
                    <h3 className='text-2xl font-bold'>Empresas</h3>
                    <p className='text-muted-foreground'>Para equipos y organizaciones</p>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-3xl font-bold'>$29.99</span>
                      <span className='text-muted-foreground'>/mes</span>
                    </div>
                  </div>
                  <ul className='mb-6 space-y-2'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Todo lo del plan Pro</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Hasta 10 usuarios</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Biblioteca compartida</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                  <Button variant='outline' className='w-full'>
                    Contactar Ventas
                  </Button>
                </CardContent>
              </Card>
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
            <Link href='#' className='hover:underline underline-offset-4'>
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
