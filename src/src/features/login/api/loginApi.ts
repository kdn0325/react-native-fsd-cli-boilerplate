export async function loginApi(email: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === '1234') {
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
}
