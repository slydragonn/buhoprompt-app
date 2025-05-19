import { TemplateData } from '@/types/template';
import { create } from 'zustand';

interface TemplateStore {
  template: TemplateData;
  setTemplate: (template: TemplateData) => void;
  updateTemplate: (template: TemplateData) => void;
}

const useTemplateStore = create<TemplateStore>((set) => ({
  template: {} as TemplateData,
  setTemplate: (template) => set({ template }),
  updateTemplate: (template) => set({ template }),
}));

export default useTemplateStore;
