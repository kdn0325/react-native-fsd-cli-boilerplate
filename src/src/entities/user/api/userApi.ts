export async function fetchUserData(userId: string) {
  // 임시 Mock
  return new Promise<{ id: string; name: string; email: string }>(resolve =>
    setTimeout(
      () =>
        resolve({ id: userId, name: 'John Doe', email: 'john@example.com' }),
      1000,
    ),
  );
}
