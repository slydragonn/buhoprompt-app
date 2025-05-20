import usePromptsStore from '@/store/prompts-store';
import { PromptData, PromptPostValue, PromptUpdateValue } from '@/types/prompt';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePrompts = () => {
  return useQuery({
    queryKey: ['prompts'],
    queryFn: async () => {
      const response = await fetch('/api/prompts');
      const prompts = await response.json();
      return prompts as PromptData[];
    },
  });
};

export const usePrompt = (id: string) => {
  return useQuery({
    queryKey: ['prompt', id],
    queryFn: async () => {
      const response = await fetch(`/api/prompts/${id}`);
      const prompt = await response.json();
      return prompt as PromptData;
    },
  });
};

export const useCreatePrompt = () => {
  const router = useRouter();
  const { prompts, setPrompts } = usePromptsStore();

  return useMutation({
    mutationFn: async (newPrompt: PromptPostValue) => {
      const response = await fetch('/api/prompts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPrompt),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Limite de creación de prompts alcanzado');
        } else {
          throw new Error('Error al crear el prompt');
        }
      }

      return response.json();
    },
    onSuccess: (data) => {
      setPrompts([...prompts, data]);
      router.push(`/app/prompts/${data.id}`);
    },
  });
};

export const useUpdatePrompt = () => {
  return useMutation({
    mutationFn: async (promptData: PromptUpdateValue) => {
      const response = await fetch(`/api/prompts/${promptData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(promptData),
      });

      const prompt = await response.json();

      return prompt as PromptData;
    },
  });
};

export const useDeletePrompt = () => {
  return useMutation({
    mutationFn: async ({ id, title }: { id: string; title: string }) => {
      const response = await fetch(`/api/prompts/${id}`, {
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
