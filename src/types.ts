export type FoodDiet = 'veg' | 'non-veg';

export interface PriceDetails {
  single?: number | string; // e.g. 220, or 'MRP'
  half?: number;
  full?: number;
  isMRP?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: PriceDetails;
  diet: FoodDiet;
  sectionId: string;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spicyLevel?: 1 | 2 | 3;
  customImage?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  iconName: string;
  items: MenuItem[];
}
