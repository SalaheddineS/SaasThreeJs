import crypto from 'crypto';

export default function generateSecurePassword(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
  const randomBytes = crypto.randomBytes(length);
  const password = Array.from(randomBytes)
    .map(byte => characters[byte % characters.length])
    .join('');

  return password;
}