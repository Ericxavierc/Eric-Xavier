import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PromotionModal from './components/PromotionModal';
import TourDetailModal from './components/TourDetailModal';
import TourCard from './components/TourCard';
import { Tour } from './types';
import { PROMOTIONS, CATEGORIES } from './constants';

const App: React.FC = () => {
  const [isPromoModalOpen, setIsPromoModalOpen] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  useEffect(() => {
    // Open the promo modal on initial load
    const timer = setTimeout(() => setIsPromoModalOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectTour = (tour: Tour) => {
    setIsPromoModalOpen(false); // Close promo modal if open
    setSelectedTour(tour);
  };

  const handleCloseDetailModal = () => {
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-16 md:py-24" style={{ backgroundImage: "url('https://picsum.photos/seed/maceio-beach/1200/800')" }}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-brightness-75"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Explore os paraísos de <span className="text-amber-400">Alagoas</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Descubra passeios inesquecíveis pelas praias mais deslumbrantes do Brasil.
            </p>
          </div>
          
          <section id="destaques" className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 border-l-4 border-amber-400 pl-4">
              Destaques
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {PROMOTIONS.map((tour) => (
                <TourCard key={tour.id} tour={tour} onClick={() => handleSelectTour(tour)} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <main className="container mx-auto p-4 md:p-6 mt-8">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 border-l-4 border-teal-400 pl-4">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {category.tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} onClick={() => handleSelectTour(tour)} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <PromotionModal
        isOpen={isPromoModalOpen}
        onClose={() => setIsPromoModalOpen(false)}
        onTourSelect={handleSelectTour}
      />

      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          onClose={handleCloseDetailModal}
        />
      )}
    </div>
  );
};

export default App;