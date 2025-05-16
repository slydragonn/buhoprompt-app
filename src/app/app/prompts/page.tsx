import MainLayout from '@/components/app/layout/main';
import Header from '@/components/app/layout/header';
import Footer from '@/components/app/layout/footer';
import CreatePromptDialog from '@/components/app/prompts/prompt-dialog';

export default function Prompts() {
  return (
    <>
      <MainLayout>
        <Header message='Mis Prompts' />
        <CreatePromptDialog />
      </MainLayout>
      <Footer>Total: 10</Footer>
    </>
  );
}
