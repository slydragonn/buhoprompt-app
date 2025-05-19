import MainLayout from '@/components/app/layout/main';
import Header from '@/components/app/layout/header';
import Footer from '@/components/app/layout/footer';
import { Button } from '@/components/ui/button';
import { BookTemplate } from 'lucide-react';
import CreateTemplateDialog from '@/components/app/templates/template-dialog';
import TemplateList from '@/components/app/templates/template-list';

export default function Templates() {
  return (
    <>
      <MainLayout>
        <Header message='Mis Templates 🧑‍💻' />
        <CreateTemplateDialog
          buttonComponent={
            <Button variant='outline' className='w-full h-10'>
              <BookTemplate />
              Nuevo Template
            </Button>
          }
        />
        <TemplateList />
      </MainLayout>
      <Footer>Total: 10</Footer>
    </>
  );
}
