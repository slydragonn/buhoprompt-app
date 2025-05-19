import { TemplateData } from '@/types/template';
import { create } from 'zustand';

interface TemplatesStore {
  templates: TemplateData[];
  setTemplates: (templates: TemplateData[]) => void;
  removeTemplate: (id: string) => void;
}

const useTemplatesStore = create<TemplatesStore>((set) => ({
  templates: [],
  setTemplates: (templates: TemplateData[]) => set({ templates }),
  removeTemplate: (id: string) => {
    set((state) => ({
      templates: state.templates.filter((template) => template.id !== id),
    }));
  },
}));

export default useTemplatesStore;
