import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as UserModel from '../models/userModel';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export const registerUser = async (username: string, password: string) => {
  if (!username || !password) throw new Error('Username and password are required');

  const existingUser = await UserModel.findUserByUsername(username);
  if (existingUser) throw new Error('Username already taken');

  const hashed = await bcrypt.hash(password, 10);
  return await UserModel.createUser(username, hashed);
};

export const loginUser = async (username: string, password: string): Promise<string> => {
  const user = await UserModel.findUserByUsername(username);
  if (!user) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '2h' });
};
