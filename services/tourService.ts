import { Tour } from '../types';
import { PROMOTIONS } from '../constants';

const PROMOTIONS_STORAGE_KEY = 'partiuAlagoasPromotions';

/**
 * NOTE: This is a mock service that uses localStorage for data persistence.
 * For the changes to be visible to all users, this should be replaced
 * with API calls to a real backend server and database.
 */

// Simulates fetching data from an API.
export const getPromotions = async (): Promise<Tour[]> => {
  // In a real application, you would make a fetch call here:
  // const response = await fetch('/api/promotions');
  // const data = await response.json();
  // return data;

  // For now, we use localStorage to persist changes for the current user.
  try {
    const savedPromotions = localStorage.getItem(PROMOTIONS_STORAGE_KEY);
    return savedPromotions ? JSON.parse(savedPromotions) : PROMOTIONS;
  } catch (error) {
    console.error("Failed to parse promotions from localStorage", error);
    return PROMOTIONS; // Fallback to default
  }
};

// Simulates saving data to an API.
export const savePromotions = async (promotions: Tour[]): Promise<void> => {
  // In a real application, you would make a fetch call here:
  // await fetch('/api/promotions', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(promotions)
  // });

  // For now, we save to localStorage.
  try {
    localStorage.setItem(PROMOTIONS_STORAGE_KEY, JSON.stringify(promotions));
  } catch (error) {
    console.error("Failed to save promotions to localStorage", error);
    throw error; // Re-throw error to be handled by the caller
  }
};
