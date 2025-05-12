import { Request, Response } from 'express';

import * as AuthService from '../services/authService';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const newUser = await AuthService.registerUser(username, password);
    res.status(201).json({ id: newUser.id, username: newUser.username });
  } catch (error: any) {
    const message = error.message || 'Registration failed';
    res.status(400).json({ error: message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const token = await AuthService.loginUser(username, password);
    res.json({ token });
  } catch (error: any) {
    const message = error.message || 'Login failed';
    res.status(401).json({ error: message });
  }
};
