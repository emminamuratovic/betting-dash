import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <Link to="/" className="text-xl font-bold">
          Betting Dashboard
        </Link>

        {/* Right side: Links + hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop links */}
          <div className="hidden sm:flex space-x-4 items-center">
            <Link to="/" className="hover:underline">Events</Link>
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="hover:underline">Login</Link>
                <Link to="/register" className="hover:underline">Register</Link>
              </>
            ) : (
              <button onClick={logout} className="hover:underline text-red-300">Logout</button>
            )}
          </div>

          {/* Hamburger button */}
          <button
            className="sm:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile links dropdown */}
      {open && (
        <div className="sm:hidden mt-3 px-4 flex flex-col items-center space-y-2">
          <Link to="/" className="hover:underline" onClick={() => setOpen(false)}>Events</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="hover:underline">Login</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="hover:underline">Register</Link>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="text-left text-red-300 hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}