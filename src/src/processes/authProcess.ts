import { useLoginStore } from '@features/login/model/loginStore';
import { useUserStore } from '@entities/user/model/userStore';
import { fetchUserData } from '@entities/user/api/userApi';

export async function loginFlow(email: string, password: string) {
  const loginStore = useLoginStore.getState();
  const userStore = useUserStore.getState();

  try {
    await loginStore.login(email, password);
    const userData = await fetchUserData('123');
    userStore.setUser(userData);
  } catch (error) {
    throw error;
  }
}
