import create from 'zustand';
import { loginApi } from '../api/loginApi';

interface LoginState {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  login: (email: string, password: string) => Promise<void>;
}

export const useLoginStore = create<LoginState>(set => ({
  email: '',
  password: '',
  loading: false,
  error: null,
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      await loginApi(email, password);
      set({ loading: false });
    } catch (e) {
      set({ loading: false, error: (e as Error).message });
    }
  },
}));
