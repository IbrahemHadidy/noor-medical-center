import { pbkdf2, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const HASH_SEPARATOR = '|';
const pbkdf2Async = promisify(pbkdf2);

// Async version of generateSalt (already async but wrapped for consistency)
export async function generateSalt(length = 16): Promise<string> {
  return randomBytes(length).toString('hex');
}

// More secure async password hashing using PBKDF2
export async function hashPassword(password: string, salt: string): Promise<string> {
  return (await pbkdf2Async(password, salt, 100000, 64, 'sha512')).toString('hex');
}

export async function createSaltedHash(password: string): Promise<string> {
  const salt = await generateSalt();
  const hash = await hashPassword(password, salt);
  return `${hash}${HASH_SEPARATOR}${salt}`;
}

export async function verifyPassword(inputPassword: string, storedValue: string): Promise<boolean> {
  const [storedHash, salt] = storedValue.split(HASH_SEPARATOR);

  if (!storedHash || !salt) {
    return false;
  }

  const inputHash = await hashPassword(inputPassword, salt);

  try {
    return timingSafeEqual(Buffer.from(inputHash), Buffer.from(storedHash));
  } catch {
    return false;
  }
}
