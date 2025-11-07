
import React from 'react';
import TourCard from './TourCard';
import { Tour } from '../types';
import { CloseIcon } from './icons/Icons';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTourSelect: (tour: Tour) => void;
  promotions: Tour[];
}

const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose, onTourSelect, promotions }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sticky top-0 bg-white z-10 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-center text-amber-500">
            Promoções de Passeios
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Fechar promoções"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {promotions.map((tour) => (
            <TourCard key={tour.id} tour={tour} onClick={() => onTourSelect(tour)} />
          ))}
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

export default PromotionModal;
