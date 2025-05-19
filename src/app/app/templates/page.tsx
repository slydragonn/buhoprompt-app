import MainLayout from '@/components/app/layout/main';
import Header from '@/components/app/layout/header';
import Footer from '@/components/app/layout/footer';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function Prompts() {
  return (
    <>
      <MainLayout>
        <Header message='Mis Templates 🧑‍💻' />
        <Button variant='outline' className='w-full h-10'>
          <Zap />
          Nuevo Template
        </Button>
      </MainLayout>
      <Footer>Total: 10</Footer>
    </>
  );
}
