import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { loginAPI } from '../api/auth';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const location = useLocation();
    const registered = location.state?.registered;
    const { isLoggedIn } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await loginAPI(username, password);
            login(token);
            localStorage.setItem('token', token);
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    if (isLoggedIn) return <Navigate to="/" replace />;

    return (
        <>
            {registered && (
                <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
                    Successfully registered! You can now log in.
                </div>
            )}
            <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-xl font-semibold mb-4">Login</h2>
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
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}