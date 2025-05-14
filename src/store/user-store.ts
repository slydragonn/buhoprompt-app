import { getPrefersColorScheme } from '@/lib/utils';
import { UserPreference } from '@/types/user';
import { create } from 'zustand';

interface UserPreferencesStore {
  preferences: UserPreference;
  setPreferences: (preferences: UserPreference) => void;
}

const useUserPreferencesStore = create<UserPreferencesStore>((set) => ({
  preferences: {
    theme: getPrefersColorScheme(),
    language: 'es',
  },
  setPreferences: (preferences) => set({ preferences }),
}));

export default useUserPreferencesStore;
