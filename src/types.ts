export type CategoryType = 
  | 'All' 
  | 'Weekend Getaway' 
  | 'Himalayan Trek' 
  | 'International' 
  | 'Workation' 
  | 'Road Trip' 
  | 'Honeymoon';

export interface Batch {
  id: string;
  startDate: string;
  endDate: string;
  price: number;
  availableSeats: number;
  status: 'Available' | 'Filling Fast' | 'Sold Out';
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  meals: string[];
  stay: string;
  highlights?: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  region: string; // e.g. "Himachal Pradesh", "Uttarakhand", "Southeast Asia"
  category: CategoryType;
  duration: string; // e.g. "4 Nights / 5 Days"
  nights: number;
  days: number;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string; // "Bestseller", "Trending", "Popular", "Limited Seats"
  featuredImage: string;
  gallery: string[];
  pickupLocation: string;
  dropLocation: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: DayItinerary[];
  batches: Batch[];
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  packageId?: string;
  travelersCount: number;
  preferredMonth: string;
  cityOfOrigin: string;
  notes?: string;
}

export interface ColorTheme {
  id: string;
  name: string;
  primaryClass: string; // Tailwind bg class
  primaryHex: string;
  textClass: string;
  borderClass: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface FilterState {
  searchQuery: string;
  category: CategoryType;
  destination: string;
  maxPrice: number;
  durationFilter: 'All' | 'Short (1-3 Days)' | 'Medium (4-6 Days)' | 'Long (7+ Days)';
  sortBy: 'popular' | 'priceAsc' | 'priceDesc' | 'rating';
}
