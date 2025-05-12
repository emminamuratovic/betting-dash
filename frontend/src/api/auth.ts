import API from './axios';

export const loginAPI = async (username: string, password: string): Promise<string> => {
  const response = await API.post('/auth/login', { username, password });
  return response.data.token;
};

export const registerAPI = async (username: string, password: string): Promise<void> => {
  await API.post('/auth/register', { username, password });
};