import { PromptData } from '@/types/prompt';
import { create } from 'zustand';

interface PromptStore {
  prompt: PromptData;
  setPrompt: (prompts: PromptData) => void;
  updatePrompt: (prompt: PromptData) => void;
}

const usePromptStore = create<PromptStore>((set) => ({
  prompt: {} as PromptData,
  newChanges: '',
  isSyncing: false,
  setPrompt: (prompt) => set({ prompt: prompt }),
  updatePrompt: (prompt) => set({ prompt }),
}));

export default usePromptStore;
