import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PromotionModal from './components/PromotionModal';
import TourDetailModal from './components/TourDetailModal';
import TourCard from './components/TourCard';
import AdminLoginModal from './components/AdminLoginModal';
import EditPromotionModal from './components/EditPromotionModal';
import { Tour } from './types';
import { PROMOTIONS, CATEGORIES } from './constants';

const App: React.FC = () => {
  const [isPromoModalOpen, setIsPromoModalOpen] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  
  // Initialize promotions from localStorage or fall back to constants
  const [promotions, setPromotions] = useState<Tour[]>(() => {
    try {
      const savedPromotions = localStorage.getItem('partiuAlagoasPromotions');
      return savedPromotions ? JSON.parse(savedPromotions) : PROMOTIONS;
    } catch (error) {
      console.error("Failed to parse promotions from localStorage", error);
      return PROMOTIONS;
    }
  });

  // Effect to show promo modal on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsPromoModalOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Effect to save promotions to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('partiuAlagoasPromotions', JSON.stringify(promotions));
    } catch (error) {
      console.error("Failed to save promotions to localStorage", error);
    }
  }, [promotions]);

  const handleSelectTour = (tour: Tour) => {
    setIsPromoModalOpen(false);
    setSelectedTour(tour);
  };

  const handleCloseDetailModal = () => {
    setSelectedTour(null);
  };

  const handleLogin = (user: string, pass: string) => {
    if (user === 'partiualagoas' && pass === 'partiualagoas135') {
      setIsAdmin(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };
  
  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleSaveTour = (updatedTour: Tour) => {
    setPromotions(prevPromos => 
      prevPromos.map(p => p.id === updatedTour.id ? updatedTour : p)
    );
    setEditingTour(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-slate-800 font-sans">
      <Header 
        isAdmin={isAdmin}
        onAdminClick={() => setShowLoginModal(true)}
        onLogout={handleLogout}
      />
      
      <div className="relative bg-cover bg-center py-16 md:py-24" style={{ backgroundImage: "url('https://picsum.photos/seed/maceio-beach/1200/800')" }}>
        <div className="absolute inset-0 bg-slate-900/50 backdrop-brightness-75"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Explore os paraísos de <span className="text-amber-400">Alagoas</span>
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Descubra passeios inesquecíveis pelas praias mais deslumbrantes do Brasil.
            </p>
          </div>
          
          <section id="destaques" className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 border-l-4 border-amber-400 pl-4">
              Destaques
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {promotions.map((tour) => (
                <TourCard 
                  key={tour.id} 
                  tour={tour} 
                  onClick={() => handleSelectTour(tour)}
                  isAdmin={isAdmin}
                  onEdit={() => setEditingTour(tour)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <main className="container mx-auto p-4 md:p-6 mt-8">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 border-l-4 border-sky-500 pl-4">
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

      {!isAdmin && <PromotionModal
        isOpen={isPromoModalOpen}
        onClose={() => setIsPromoModalOpen(false)}
        onTourSelect={handleSelectTour}
        promotions={promotions}
      />}

      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          onClose={handleCloseDetailModal}
        />
      )}

      {showLoginModal && (
        <AdminLoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}

      {editingTour && (
        <EditPromotionModal
          tour={editingTour}
          onClose={() => setEditingTour(null)}
          onSave={handleSaveTour}
        />
      )}
    </div>
  );
};

export default App;