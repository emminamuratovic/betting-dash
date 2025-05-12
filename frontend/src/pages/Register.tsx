import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { registerAPI } from '../api/auth';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerAPI(username, password);
      navigate('/login', { state: { registered: true } });
    } catch (err) {
      setError('Username already taken');
    }
  };

  if (isLoggedIn) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}