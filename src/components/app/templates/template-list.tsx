'use client';

import { useEffect } from 'react';
import TemplateCard from './template-card';
import { useTemplates } from '@/hooks/use-templates';
import useTemplatesStore from '@/store/templates-store';

export default function TemplateList() {
  const { isPending, isError, isSuccess, error, data } = useTemplates();
  const { templates, setTemplates } = useTemplatesStore();

  useEffect(() => {
    if (isSuccess) {
      setTemplates(data);
    }
  }, [isSuccess]);

  if (isPending) return <div className='w-xl text-center'>Cargando...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (!templates.length) {
    return (
      <div className='text-center w-full sm:w-xl border border-dashed border-neutral-300 dark:border-neutral-800 rounded-md font-extralight text-sm p-4'>
        Aun no tienes templates
      </div>
    );
  }

  return (
    <section>
      <h3 className='text-sm font-extralight mb-2'>Lista de Templates</h3>
      <ul className='flex flex-col gap-4 w-full'>
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            title={template.title}
            description={template.description}
            createdAt={template.createdAt}
            updatedAt={template.updatedAt}
          />
        ))}
      </ul>
    </section>
  );
}
