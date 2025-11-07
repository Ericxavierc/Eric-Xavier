import React from 'react';
import { LocationIcon, ClockIcon, StarIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-20 border-b border-slate-700/50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
            Partiu<span className="text-amber-400">Alagoas</span>
          </h1>
          <p className="text-xs text-gray-400 -mt-1">Guia & Passeios</p>
        </div>
        
        <div className="hidden md:flex items-center gap-4 text-xs text-gray-300">
           <div className="flex items-center gap-1.5">
              <LocationIcon className="w-4 h-4 text-teal-400" />
              <span>Maceió - AL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4 text-teal-400" />
              <span className="font-medium text-green-400">Aberto</span>
              <span>8h-18h</span>
            </div>
        </div>
      </div>
       <div className="md:hidden bg-slate-800/50 text-xs text-gray-300 p-2">
            <div className="container mx-auto flex justify-around items-center">
                <div className="flex items-center gap-1.5">
                    <LocationIcon className="w-3 h-3 text-teal-400" />
                    <span>Maceió - AL</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-3 h-3 text-teal-400" />
                    <span className="font-medium text-green-400">Aberto</span>
                    <span className="hidden sm:inline">• 8h às 18h</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <StarIcon className="w-3 h-3 text-amber-300" />
                    <span>Programa de Fidelidade</span>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;