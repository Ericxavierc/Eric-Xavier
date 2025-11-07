
export interface Tour {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  originalPrice?: number;
  promoPrice: number;
  image: string;
  isPromo?: boolean;
  discount?: string;
  details?: string;
  priceLabel?: string;
  isPackage?: boolean;
}

export interface Category {
  id: string;
  name: string;
  tours: Tour[];
}