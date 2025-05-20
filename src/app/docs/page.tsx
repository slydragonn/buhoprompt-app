import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ChevronRight,
  Copy,
  FileText,
  Lightbulb,
  MessageSquareText,
  Sparkles,
  Star,
} from 'lucide-react';
import Header from '@/components/landing/layout/header';

export default function DocsPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 py-8 mt-10'>
        {/* Sidebar */}
        <aside className='fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block'>
          <div className='h-full py-6 pr-6 lg:py-8'>
            <div className='space-y-4'>
              <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Documentación</h2>
                <div className='space-y-1'>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#introduccion'>
                      <FileText className='mr-2 h-4 w-4' />
                      Introducción
                    </Link>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#primeros-pasos'>
                      <ChevronRight className='mr-2 h-4 w-4' />
                      Primeros pasos
                    </Link>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#crear-prompts'>
                      <Sparkles className='mr-2 h-4 w-4' />
                      Crear prompts
                    </Link>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#plantillas'>
                      <Star className='mr-2 h-4 w-4' />
                      Plantillas
                    </Link>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#asistente-ia'>
                      <MessageSquareText className='mr-2 h-4 w-4' />
                      Asistente IA
                    </Link>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#mejores-practicas'>
                      <Lightbulb className='mr-2 h-4 w-4' />
                      Mejores prácticas
                    </Link>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start' asChild>
                    <Link href='#faq'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='mr-2 h-4 w-4'
                      >
                        <circle cx='12' cy='12' r='10' />
                        <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
                        <path d='M12 17h.01' />
                      </svg>
                      Preguntas frecuentes
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid'>
          <div className='mx-auto w-full min-w-0'>
            <div className='mb-4 flex items-center space-x-1 text-sm text-muted-foreground'>
              <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Docs</div>
              <ChevronRight className='h-4 w-4' />
              <div className='font-medium text-foreground'>Tutorial</div>
            </div>

            <div className='space-y-12'>
              {/* Introduction */}
              <section id='introduccion' className='space-y-6'>
                <h1 className='scroll-m-20 text-4xl font-bold tracking-tight'>
                  Introducción a BuhoPrompt
                </h1>
                <p className='text-xl text-muted-foreground'>
                  Aprende a utilizar BuhoPrompt para crear, editar y optimizar tus prompts para
                  diferentes modelos de IA.
                </p>

                <div className='flex items-center space-x-4 rounded-lg border p-4'>
                  <Image
                    src='/buhoprompt-logo-dark.svg'
                    alt='BuhoPrompt Logo'
                    width={50}
                    height={50}
                  />
                  <div className='space-y-1'>
                    <h3 className='font-medium'>BuhoPrompt</h3>
                    <p className='text-sm text-muted-foreground'>
                      Versión 1.0 • Última actualización: Mayo 2025
                    </p>
                  </div>
                </div>

                <div className='space-y-4'>
                  <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight'>
                    ¿Qué es BuhoPrompt?
                  </h2>
                  <p>
                    BuhoPrompt es una plataforma diseñada para ayudarte a crear, almacenar, editar y
                    perfeccionar prompts para diferentes modelos de IA. Con BuhoPrompt, puedes:
                  </p>
                  <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                    <li>Crear prompts optimizados para diferentes modelos de IA</li>
                    <li>Utilizar plantillas prediseñadas para casos de uso específicos</li>
                    <li>Recibir sugerencias por parte del asistente IA para mejorar tus prompts</li>
                    <li>Almacenar y organizar tus prompts para reutilizarlos</li>
                  </ul>
                </div>
              </section>

              {/* Getting Started */}
              <section id='primeros-pasos' className='space-y-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  Primeros pasos
                </h2>
                <div className='space-y-4'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Crear una cuenta
                  </h3>
                  <p>
                    Para comenzar a utilizar BuhoPrompt, necesitas crear una cuenta. Sigue estos
                    pasos:
                  </p>
                  <ol className='my-6 ml-6 list-decimal [&>li]:mt-2'>
                    <li>Haz clic en &quot;Sign in&quot; o &quot;Sign up&quot;</li>
                    <li>
                      Completa el formulario con tu información o regístrate con Google/GitHub
                    </li>
                    <li>Verifica tu cuenta</li>
                    <li>¡Listo! Ya puedes acceder a tu dashboard de BuhoPrompt</li>
                  </ol>

                  <div className='rounded-lg border overflow-hidden'>
                    <Image
                      src='/dashboard.png'
                      alt='Dashboard de BuhoPrompt'
                      width={1200}
                      height={600}
                      className='w-full object-cover'
                    />
                    <div className='p-4 bg-card'>
                      <p className='text-sm text-muted-foreground'>
                        Dashboard principal de BuhoPrompt donde puedes ver tus prompts recientes y
                        acceder a todas las funcionalidades.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='space-y-4 mt-8'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Explorar la interfaz
                  </h3>
                  <p>
                    La interfaz de BuhoPrompt está diseñada para ser intuitiva y fácil de usar. Aquí
                    te explicamos las principales secciones:
                  </p>

                  <Tabs defaultValue='dashboard' className='w-full'>
                    <TabsList className='grid w-full grid-cols-3'>
                      <TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
                      <TabsTrigger value='editor'>Editor</TabsTrigger>
                      <TabsTrigger value='biblioteca'>Biblioteca</TabsTrigger>
                    </TabsList>
                    <TabsContent value='dashboard' className='space-y-4 mt-4'>
                      <div className='rounded-lg border overflow-hidden'>
                        <Image
                          src='/dashboard.png'
                          alt='Dashboard de BuhoPrompt'
                          width={1200}
                          height={600}
                          className='w-full object-cover'
                        />
                      </div>
                      <h4 className='text-lg font-semibold'>Dashboard</h4>
                      <p>El dashboard es tu punto de partida. Aquí encontrarás:</p>
                      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                        <li>Prompts recientes</li>
                        <li>Acceso rápido a todas las funcionalidades</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value='editor' className='space-y-4 mt-4'>
                      <div className='rounded-lg border overflow-hidden'>
                        <Image
                          src='/prompt-edit.png'
                          alt='Editor de BuhoPrompt'
                          width={1200}
                          height={600}
                          className='w-full object-cover'
                        />
                      </div>
                      <h4 className='text-lg font-semibold'>Editor</h4>
                      <p>
                        El editor es donde crearás y refinarás tus prompts. Características
                        principales:
                      </p>
                      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                        <li>Editor de texto con formato</li>
                        <li>Interactuar con el Asistente IA</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value='biblioteca' className='space-y-4 mt-4'>
                      <div className='rounded-lg border overflow-hidden'>
                        <Image
                          src='/templates-select.png'
                          alt='Biblioteca de BuhoPrompt'
                          width={1200}
                          height={600}
                          className='w-full object-cover'
                        />
                      </div>
                      <h4 className='text-lg font-semibold'>Biblioteca</h4>
                      <p>
                        La biblioteca es donde se almacenan todos tus prompts y plantillas. Aquí
                        puedes:
                      </p>
                      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                        <li>Organizar prompts por categorías</li>
                        <li>Buscar prompts específicos</li>
                        <li>Acceder a plantillas prediseñadas</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>

              {/* Creating Prompts */}
              <section id='crear-prompts' className='space-y-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  Crear prompts
                </h2>
                <p>
                  Crear un prompt efectivo es un arte. BuhoPrompt te guía en este proceso para
                  maximizar los resultados de tus interacciones con IA.
                </p>

                <div className='space-y-4'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Crear un nuevo prompt
                  </h3>
                  <ol className='my-6 ml-6 list-decimal [&>li]:mt-2'>
                    <li>
                      Desde el dashboard, haz clic en el botón{' '}
                      <span className='bg-primary/20 text-primary px-2 py-1 rounded'>
                        + Nuevo Prompt
                      </span>
                    </li>
                    <li>Guarda tu prompt con un nombre descriptivo</li>
                    <li>Elige entre empezar desde cero o utilizar una plantilla</li>
                    <li>Escribe tu prompt inicial</li>
                    <li>Genera el prompt</li>
                    <li>Visualiza el prompt optimizado</li>
                    <li>Utiliza el asistente de IA para mejorar tu prompt</li>
                    <li>O editalo manualmente</li>
                  </ol>

                  <div className='rounded-lg border p-4 bg-card'>
                    <h4 className='font-semibold mb-2'>Ejemplo de prompt básico vs. optimizado</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <div className='text-sm font-medium text-muted-foreground'>
                          Prompt básico:
                        </div>
                        <div className='p-3 bg-muted rounded-md font-mono text-sm'>
                          Escribe un artículo sobre inteligencia artificial.
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <div className='text-sm font-medium text-primary'>Prompt optimizado:</div>
                        <div className='p-3 bg-purple-700/20 dark:bg-purple-700/10 rounded-md font-mono text-sm'>
                          Escribe un artículo de 800 palabras sobre los avances recientes en
                          inteligencia artificial generativa. Incluye:
                          <br />- 3 ejemplos de aplicaciones prácticas
                          <br />- Consideraciones éticas
                          <br />- Perspectivas futuras
                          <br />
                          <br />
                          Usa un tono informativo pero accesible para una audiencia con
                          conocimientos básicos de tecnología.
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 flex items-center'>
                      <Button variant='outline' size='sm' className='gap-1'>
                        <Copy className='h-3.5 w-3.5' />
                        <span>Copiar ejemplo</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className='space-y-4 mt-8'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Componentes de un buen prompt
                  </h3>
                  <p>Un prompt efectivo suele incluir los siguientes componentes:</p>

                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>Contexto claro</AccordionTrigger>
                      <AccordionContent>
                        Proporciona suficiente información de fondo para que el modelo comprenda el
                        contexto. Por ejemplo, en lugar de preguntar &quot;¿Cómo mejoro esto?&quot;,
                        especifica &quot;¿Cómo puedo mejorar este código Python que calcula el
                        factorial de un número?&quot;
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-2'>
                      <AccordionTrigger>Instrucciones específicas</AccordionTrigger>
                      <AccordionContent>
                        Sé claro sobre lo que quieres que haga el modelo. Incluye detalles como
                        formato, longitud, estilo, tono, etc. Por ejemplo: &quot;Escribe un correo
                        electrónico formal de 200 palabras para solicitar una reunión con un cliente
                        potencial.&quot;
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-3'>
                      <AccordionTrigger>Ejemplos o demostraciones</AccordionTrigger>
                      <AccordionContent>
                        Proporcionar ejemplos de lo que esperas puede ayudar al modelo a entender
                        mejor tu solicitud. Esto es especialmente útil para tareas complejas o
                        formatos específicos.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-4'>
                      <AccordionTrigger>Restricciones y limitaciones</AccordionTrigger>
                      <AccordionContent>
                        Especifica lo que NO quieres que incluya el modelo en su respuesta. Por
                        ejemplo: &quot;No incluyas referencias a estudios anteriores a 2020&quot; o
                        &quot;Evita usar jerga técnica&quot;.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-5'>
                      <AccordionTrigger>Formato de salida</AccordionTrigger>
                      <AccordionContent>
                        Indica cómo quieres que se estructure la respuesta. Por ejemplo:
                        &quot;Presenta la información en forma de lista numerada&quot; o
                        &quot;Organiza la respuesta en secciones con encabezados en negrita&quot;.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              {/* Templates */}
              <section id='plantillas' className='space-y-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  Uso de plantillas
                </h2>
                <p>
                  Las plantillas son una forma rápida de crear prompts efectivos para casos de uso
                  específicos. BuhoPrompt ofrece una variedad de plantillas prediseñadas.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Investigación académica</CardTitle>
                      <CardDescription>
                        Para revisiones de literatura y análisis de datos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground mb-4'>
                        Ideal para investigadores y estudiantes que necesitan analizar información
                        académica.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Desarrollo de software</CardTitle>
                      <CardDescription>Para escribir, revisar y depurar código</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground mb-4'>
                        Optimizado para programadores que necesitan ayuda con tareas de
                        codificación.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Creación de contenido</CardTitle>
                      <CardDescription>Para blogs, redes sociales y marketing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground mb-4'>
                        Perfecto para creadores de contenido y profesionales de marketing.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className='space-y-4 mt-8'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Personalizar plantillas
                  </h3>
                  <p>
                    Puedes personalizar cualquier plantilla para adaptarla a tus necesidades
                    específicas:
                  </p>
                  <ol className='my-6 ml-6 list-decimal [&>li]:mt-2'>
                    <li>Crea un nuevo template</li>
                    <li>Selecciona una opcion para crear una copia</li>
                    <li>Modifica los campos según tus necesidades</li>
                    <li>Guarda la plantilla personalizada en tu biblioteca</li>
                  </ol>

                  <div className='rounded-lg border overflow-hidden'>
                    <Image
                      src='/template-edit.png'
                      alt='Personalización de plantillas'
                      width={1200}
                      height={600}
                      className='w-full object-cover'
                    />
                    <div className='p-4 bg-card'>
                      <p className='text-sm text-muted-foreground'>
                        Interfaz de personalización de plantillas donde puedes modificar todos los
                        parámetros.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI Assistant */}
              <section id='asistente-ia' className='space-y-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  Asistente IA
                </h2>
                <p>
                  El Asistente IA de BuhoPrompt te ayuda a mejorar tus prompts en tiempo real,
                  ofreciendo sugerencias basadas en las mejores prácticas de prompt engineering.
                </p>

                <div className='rounded-lg border overflow-hidden'>
                  <Image
                    src='/prompt-chat.png'
                    alt='Asistente IA de BuhoPrompt'
                    width={1200}
                    height={600}
                    className='w-full object-cover'
                  />
                  <div className='p-4 bg-card'>
                    <p className='text-sm text-muted-foreground'>
                      El Asistente IA analiza tu prompt y ofrece sugerencias para mejorarlo.
                    </p>
                  </div>
                </div>

                <div className='space-y-4 mt-4'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Funcionalidades del Asistente IA
                  </h3>
                  <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                    <li>
                      <span className='font-medium'>Análisis de estructura:</span> Evalúa la
                      claridad y organización de tu prompt
                    </li>
                    <li>
                      <span className='font-medium'>Sugerencias de especificidad:</span> Identifica
                      áreas donde puedes ser más específico
                    </li>
                    <li>
                      <span className='font-medium'>Recomendaciones de formato:</span> Sugiere
                      mejoras en la presentación de la información
                    </li>
                    <li>
                      <span className='font-medium'>Adaptación a modelos:</span> Ajusta las
                      sugerencias según el modelo de IA seleccionado
                    </li>
                  </ul>

                  <div className='bg-card rounded-lg p-4 border'>
                    <h4 className='font-semibold mb-2'>Ejemplo de sugerencia del Asistente IA</h4>
                    <div className='space-y-2'>
                      <div className='p-3 bg-muted rounded-md font-mono text-sm'>
                        Prompt original: &quot;Escribe un artículo sobre cambio climático&quot;
                      </div>
                      <div className='p-3 bg-primary/10 rounded-md text-sm'>
                        <p className='font-medium text-primary mb-2'>
                          Sugerencia del Asistente IA:
                        </p>
                        <p>Tu prompt es demasiado general. Considera especificar:</p>
                        <ul className='list-disc ml-5 space-y-1 mt-2'>
                          <li>Longitud deseada del artículo</li>
                          <li>
                            Aspectos específicos del cambio climático (causas, efectos, soluciones)
                          </li>
                          <li>Audiencia objetivo (científicos, público general, estudiantes)</li>
                          <li>Tono y estilo de escritura</li>
                          <li>Inclusión de datos o ejemplos específicos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section id='mejores-practicas' className='space-y-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  Mejores prácticas
                </h2>
                <p>
                  Aquí te presentamos algunas mejores prácticas para sacar el máximo provecho de
                  BuhoPrompt y crear prompts más efectivos.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Sé específico y claro</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        Cuanto más específico seas en tus instrucciones, mejores resultados
                        obtendrás. Evita ambigüedades y proporciona todos los detalles necesarios.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Utiliza el formato adecuado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        Estructura tu prompt de manera lógica y utiliza elementos como listas,
                        viñetas o secciones para organizar la información.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Itera y refina</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        No esperes resultados perfectos al primer intento. Utiliza el feedback del
                        Asistente IA para refinar tus prompts gradualmente.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Adapta al modelo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        Diferentes modelos de IA tienen diferentes capacidades y limitaciones.
                        Adapta tus prompts según el modelo que estés utilizando.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className='space-y-4 mt-8'>
                  <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                    Errores comunes a evitar
                  </h3>
                  <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
                    <li>
                      <span className='font-medium'>Prompts demasiado vagos:</span> &quot;Dame
                      ideas&quot; vs. &quot;Dame 5 ideas para mejorar la retención de clientes en
                      una tienda online de ropa&quot;
                    </li>
                    <li>
                      <span className='font-medium'>Instrucciones contradictorias:</span> Evita
                      pedir cosas que se contradicen entre sí
                    </li>
                    <li>
                      <span className='font-medium'>Ignorar el contexto del modelo:</span> Recuerda
                      que los modelos tienen limitaciones y conocimientos hasta cierta fecha
                    </li>
                    <li>
                      <span className='font-medium'>No iterar:</span> Los mejores prompts suelen
                      surgir después de varias iteraciones y ajustes
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ Section */}
              <section id='faq' className='space-y-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  Preguntas frecuentes
                </h2>
                <p>
                  Aquí encontrarás respuestas a las preguntas más comunes sobre BuhoPrompt y el
                  prompt engineering.
                </p>

                <div className='space-y-4'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>
                        ¿Qué es exactamente el prompt engineering?
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className='mb-2'>
                          El prompt engineering es el proceso de diseñar, optimizar y refinar
                          instrucciones o &quot;prompts&quot; para modelos de inteligencia
                          artificial con el fin de obtener los mejores resultados posibles.
                        </p>
                        <p>
                          Es una disciplina que combina la comprensión de cómo funcionan los modelos
                          de IA con técnicas específicas para comunicarse con ellos de manera
                          efectiva, permitiendo obtener respuestas más precisas, relevantes y
                          útiles.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-2'>
                      <AccordionTrigger>
                        ¿BuhoPrompt funciona con todos los modelos de IA?
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>
                          BuhoPrompt está diseñado para funcionar con una amplia variedad de modelos
                          de IA, incluyendo GPT-4, GPT-3.5, Claude, Llama, Mistral, y otros modelos
                          populares. Nuestras plantillas están optimizadas para diferentes modelos y
                          casos de uso, y el Asistente IA puede adaptar sus sugerencias según el
                          modelo específico que estés utilizando.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-3'>
                      <AccordionTrigger>
                        ¿Necesito conocimientos técnicos para usar BuhoPrompt?
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>
                          No, BuhoPrompt está diseñado para ser accesible tanto para principiantes
                          como para usuarios avanzados. La interfaz intuitiva y las plantillas
                          prediseñadas permiten a cualquier persona crear prompts efectivos sin
                          necesidad de conocimientos técnicos previos. Para usuarios más avanzados,
                          ofrecemos herramientas y opciones de personalización más detalladas.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-6'>
                      <AccordionTrigger>
                        ¿Puedo usar BuhoPrompt sin conexión a internet?
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Actualmente, BuhoPrompt requiere conexión a internet para funcionar
                          completamente, ya que muchas de sus características dependen de servicios
                          en la nube. Sin embargo, estamos desarrollando una versión offline con
                          funcionalidades limitadas que permitirá editar y gestionar prompts sin
                          conexión, sincronizándose cuando vuelvas a estar online.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className='w-full border-t border-gray-800 bg-black text-white'>
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
            <Link href='/contact' className='text-muted-foreground hover:text-primary'>
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
