import React, { useState } from 'react';
import { CloseIcon } from './icons/Icons';

interface AdminLoginModalProps {
  onClose: () => void;
  onLogin: (user: string, pass: string) => boolean;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginAttempt = () => {
    const success = onLogin(username, password);
    if (!success) {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-sm relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-center text-slate-800">
            Acesso Restrito
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Fechar"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">Usuário</label>
            <input 
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 text-slate-900 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Senha</label>
            <input 
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 text-slate-900 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition" 
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button 
            onClick={handleLoginAttempt}
            className="w-full bg-sky-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-600 transition-colors transform hover:scale-105"
          >
            Entrar
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AdminLoginModal;
