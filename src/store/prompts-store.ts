import { PromptData } from '@/types/prompt';
import { create } from 'zustand';

interface PromptsStore {
  prompts: PromptData[];
  setPrompts: (prompts: PromptData[]) => void;
  removePrompt: (id: string) => void;
}

const usePromptsStore = create<PromptsStore>((set) => ({
  prompts: [],
  setPrompts: (prompts) => set({ prompts }),
  removePrompt: (id) =>
    set((state) => ({ prompts: state.prompts.filter((prompt) => prompt.id !== id) })),
}));

export default usePromptsStore;
