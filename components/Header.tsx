import React from 'react';
import { LocationIcon, ClockIcon, StarIcon } from './icons/Icons';

interface HeaderProps {
    isAdmin: boolean;
    onAdminClick: () => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onAdminClick, onLogout }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-20 border-b border-gray-200/80">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tighter">
            Partiu<span className="text-amber-400">Alagoas</span>
          </h1>
          <p className="text-xs text-gray-500 -mt-1">Guia & Passeios</p>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-xs text-slate-700">
               <div className="flex items-center gap-1.5">
                  <LocationIcon className="w-4 h-4 text-sky-500" />
                  <span>Maceió - AL</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4 text-sky-500" />
                  <span className="font-medium text-green-500">Aberto</span>
                  <span>8h-18h</span>
                </div>
            </div>
             <div>
                {isAdmin ? (
                    <button onClick={onLogout} className="text-xs bg-red-500 text-white font-bold py-1 px-3 rounded-md hover:bg-red-600 transition-colors">
                        Sair
                    </button>
                ) : (
                    <button onClick={onAdminClick} className="text-xs text-slate-600 hover:text-sky-500 transition-colors">
                        Admin
                    </button>
                )}
            </div>
        </div>
      </div>
       <div className="md:hidden bg-white/50 border-t border-gray-200/80 text-xs text-slate-700 p-2">
            <div className="container mx-auto flex justify-around items-center">
                <div className="flex items-center gap-1.5">
                    <LocationIcon className="w-3 h-3 text-sky-500" />
                    <span>Maceió - AL</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-3 h-3 text-sky-500" />
                    <span className="font-medium text-green-500">Aberto</span>
                    <span className="hidden sm:inline">• 8h às 18h</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <StarIcon className="w-3 h-3 text-amber-400" />
                    <span>Programa de Fidelidade</span>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
