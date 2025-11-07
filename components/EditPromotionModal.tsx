import React, { useState, useEffect } from 'react';
import { Tour } from '../types';
import { CloseIcon } from './icons/Icons';

interface EditPromotionModalProps {
  tour: Tour;
  onClose: () => void;
  onSave: (tour: Tour) => void;
}

const EditPromotionModal: React.FC<EditPromotionModalProps> = ({ tour, onClose, onSave }) => {
  const [title, setTitle] = useState(tour.title);
  const [shortDescription, setShortDescription] = useState(tour.shortDescription);
  const [promoPrice, setPromoPrice] = useState(tour.promoPrice);
  const [image, setImage] = useState(tour.image);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  const handleSave = () => {
    onSave({
      ...tour,
      title,
      shortDescription,
      promoPrice,
      image,
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[95vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Editar Promoção</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Fechar"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Título</label>
            <input 
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 text-slate-900 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">Descrição Curta</label>
            <textarea
              id="description"
              rows={3}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 text-slate-900 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="price">Preço Promocional (R$)</label>
            <input 
              type="number"
              id="price"
              value={promoPrice}
              onChange={(e) => setPromoPrice(parseFloat(e.target.value) || 0)}
              className="w-full bg-gray-100 border border-gray-300 text-slate-900 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition" 
            />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image-upload">Imagem</label>
             <div className="mt-2 flex items-center gap-4">
                <img src={image} alt="Preview" className="w-24 h-24 object-cover rounded-md"/>
                <input 
                    type="file" 
                    id="image-upload"
                    accept="image/*"
                    onChange={(e) => e.target.files && setImageFile(e.target.files[0])}
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-sky-50 file:text-sky-700
                      hover:file:bg-sky-100"
                />
             </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end items-center gap-4 rounded-b-lg">
            <button onClick={onClose} className="text-sm text-slate-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              Cancelar
            </button>
            <button onClick={handleSave} className="bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-amber-400 transition-colors">
              Salvar
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

export default EditPromotionModal;
