export function getUserDisplayName(user: { name: string; email: string }) {
  return user.name || user.email.split('@')[0];
}
