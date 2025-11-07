import React, { useState } from 'react';
import { Tour } from '../types';
import { CloseIcon, MinusIcon, PlusIcon } from './icons/Icons';

interface TourDetailModalProps {
  tour: Tour;
  onClose: () => void;
}

const TourDetailModal: React.FC<TourDetailModalProps> = ({ tour, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const totalPrice = (tour.promoPrice * quantity).toFixed(2).replace('.', ',');

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[95vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={`${tour.image.replace('/400/400', '/600/400')}`} alt={tour.title} className="w-full h-48 object-cover rounded-t-lg" />
           <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/60 text-slate-800 rounded-full p-1.5 hover:bg-white/90 transition-colors"
            aria-label="Fechar detalhes"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold text-amber-500">{tour.title}
            {tour.discount && <span className="ml-3 text-sm bg-red-600 text-white font-semibold px-2 py-1 rounded-md align-middle">{tour.discount}</span>}
          </h2>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold text-slate-900">
              {tour.priceLabel || 'Por'}: R$ {tour.promoPrice.toFixed(2).replace('.', ',')}
            </span>
            {tour.originalPrice && (
              <span className="text-md text-gray-500 line-through">
                De: R$ {tour.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          <p className="text-gray-700 mt-4 text-base leading-relaxed whitespace-pre-wrap">
            {tour.fullDescription}
          </p>
          
          {!tour.isPackage && (
            <div className="mt-6">
              <label htmlFor="observation" className="block text-sm font-medium text-gray-700 mb-1">Alguma observação?</label>
              <textarea
                id="observation"
                rows={3}
                maxLength={140}
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 text-slate-900 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                placeholder="Ex: alergias, restrições, etc."
              ></textarea>
              <p className="text-right text-xs text-gray-500 mt-1">{observation.length}/140</p>
            </div>
          )}
        </div>

        {!tour.isPackage && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-4 rounded-b-lg">
            <div className="flex items-center gap-2">
              <button onClick={() => handleQuantityChange(-1)} className="p-2 bg-gray-200 rounded-full text-slate-800 hover:bg-gray-300 transition disabled:opacity-50" disabled={quantity <= 1}><MinusIcon className="w-5 h-5" /></button>
              <span className="text-xl font-bold w-8 text-center">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="p-2 bg-gray-200 rounded-full text-slate-800 hover:bg-gray-300 transition"><PlusIcon className="w-5 h-5" /></button>
            </div>
            <button className="flex-1 bg-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg hover:bg-amber-400 transition-colors transform hover:scale-105">
              Adicionar R$ {totalPrice}
            </button>
          </div>
        )}
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

export default TourDetailModal;