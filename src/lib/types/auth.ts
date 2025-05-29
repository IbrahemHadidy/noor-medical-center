import { UserWithAllRelations } from './user';

export interface AuthRequest {
  identifier: string;
  password: string;
}

export type RegisterRequest = Pick<
  UserWithAllRelations,
  'firstName' | 'lastName' | 'email' | 'password' | 'gender' | 'role'
> & { phone?: string };
