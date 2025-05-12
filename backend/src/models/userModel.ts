import { db } from '../db/db';

export const findUserByUsername = async (username: string) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

export const createUser = async (username: string, hashedPassword: string) => {
  const result = await db.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
};