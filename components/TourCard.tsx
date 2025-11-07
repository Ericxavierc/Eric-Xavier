
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onClick: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center bg-slate-800 p-3 rounded-lg shadow-md cursor-pointer hover:bg-slate-700 transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="flex-1 pr-4">
        <h3 className="font-bold text-base md:text-lg text-white">{tour.title}</h3>
        {tour.details && <p className="text-xs text-teal-400 mb-1">{tour.details}</p>}
        <p className="text-sm text-gray-400 h-10 overflow-hidden leading-5">
          {tour.shortDescription}
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-amber-400">
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
