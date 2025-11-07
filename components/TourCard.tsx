import React from 'react';
import { Tour } from '../types';
import { EditIcon } from './icons/Icons';

interface TourCardProps {
  tour: Tour;
  onClick: () => void;
  isAdmin?: boolean;
  onEdit?: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onClick, isAdmin = false, onEdit }) => {
  
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <div
      onClick={onClick}
      className="relative flex items-center bg-white p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] border border-gray-200/80"
    >
      {isAdmin && tour.isPromo && (
        <button 
          onClick={handleEditClick}
          className="absolute top-2 right-2 bg-sky-500 text-white rounded-full p-1.5 shadow-lg hover:bg-sky-600 transition-colors z-10"
          aria-label={`Editar ${tour.title}`}
        >
          <EditIcon className="w-4 h-4" />
        </button>
      )}
      <div className="flex-1 pr-4">
        <h3 className="font-bold text-base md:text-lg text-slate-900">{tour.title}</h3>
        {tour.details && <p className="text-xs text-sky-500 mb-1">{tour.details}</p>}
        <p className="text-sm text-gray-600 h-10 overflow-hidden leading-5">
          {tour.shortDescription}
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-amber-500">
            R$ {tour.promoPrice.toFixed(2).replace('.', ',')}
          </span>
          {tour.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R$ {tour.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </div>
      <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TourCard;
