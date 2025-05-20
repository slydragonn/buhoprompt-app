'use client';

import MainLayout from '@/components/app/layout/main';
import Header from '@/components/app/layout/header';
import Footer from '@/components/app/layout/footer';
import { Button } from '@/components/ui/button';
import { BookTemplate } from 'lucide-react';
import CreateTemplateDialog from '@/components/app/templates/template-dialog';
import TemplateList from '@/components/app/templates/template-list';
import useTemplatesStore from '@/store/templates-store';

export default function Templates() {
  const { templates } = useTemplatesStore();
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
      <Footer>Total: {templates.length}</Footer>
    </>
  );
}
