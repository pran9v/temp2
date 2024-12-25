export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  sizes: string[];
  dummyDetails: Array<{
    label: string;
    value: string;
  }>;
}