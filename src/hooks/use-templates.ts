import useTemplatesStore from '@/store/templates-store';
import { TemplateData, TemplateCreateValue, TemplateUpdateValue } from '@/types/template';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useTemplates = () => {
  return useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const response = await fetch('/api/templates');
      const templates = await response.json();
      return templates as TemplateData[];
    },
  });
};

export const useTemplate = (id: string) => {
  return useQuery({
    queryKey: ['template', id],
    queryFn: async () => {
      const response = await fetch(`/api/templates/${id}`);
      const template = await response.json();
      return template as TemplateData;
    },
  });
};

export const useCreateTemplate = () => {
  const router = useRouter();
  const { templates, setTemplates } = useTemplatesStore();

  return useMutation({
    mutationFn: async (newTemplate: TemplateCreateValue) => {
      const response = await fetch('/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTemplate),
      });

      return response.json();
    },
    onSuccess: (data) => {
      console.log(data);
      setTemplates([...templates, data]);
      router.push(`/app/templates/${data.id}`);
    },
  });
};

export const useUpdateTemplate = () => {
  return useMutation({
    mutationFn: async (templateData: TemplateUpdateValue) => {
      const response = await fetch(`/api/templates/${templateData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateData),
      });

      const template = await response.json();

      return template as TemplateData;
    },
  });
};

export const useDeleteTemplate = () => {
  return useMutation({
    mutationFn: async ({ id, title }: { id: string; title: string }) => {
      const response = await fetch(`/api/templates/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, title }),
      });

      return response.json();
    },
  });
};
