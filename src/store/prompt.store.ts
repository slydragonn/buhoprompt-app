import { PromptData } from '@/types/prompt';
import { create } from 'zustand';

interface PromptStore {
  prompt: PromptData;
  newChanges: string;
  isSyncing: boolean;
  setPrompt: (prompts: PromptData) => void;
  updatePrompt: (prompt: PromptData) => void;
  setIsSyncing: (isSyncing: boolean) => void;
  setNewChanges: (prompt: string) => void;
}

const usePromptStore = create<PromptStore>((set) => ({
  prompt: {} as PromptData,
  newChanges: '',
  isSyncing: false,
  setPrompt: (prompt) => set({ prompt: prompt }),
  updatePrompt: (prompt) => set({ prompt }),
  setIsSyncing: (isSyncing) => set({ isSyncing }),
  setNewChanges: (prompt) => set({ newChanges: prompt }),
}));

export default usePromptStore;
