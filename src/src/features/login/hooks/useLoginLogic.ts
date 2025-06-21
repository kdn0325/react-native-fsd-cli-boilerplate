import { useLoginStore } from '../model/loginStore';

export function useLoginLogic() {
  const { email, setEmail, password, setPassword, login, loading, error } =
    useLoginStore();

  return { email, setEmail, password, setPassword, login, loading, error };
}
