import { Product } from '../types/product';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export const products: Product[] = [
  {
    id: 'table-lamp',
    name: 'Small Table Lamp',
    description: 'Sucolite Small Table, featuring a studded texture base, perfect for bedside, reading, and adding a touch of elegance to any room.',
    price: 18.21,
    image: image1,
    rating: 5,
    sizes: ['1', '2', '3', '4'],
    dummyDetails: [
      { label: 'Power Mode', value: 'Power Supply' },
      { label: 'Material', value: 'Resin' },
      { label: 'Battery Properties', value: 'Without Battery' },
      { label: 'Operating Voltage', value: '110V (included)-130V (included)' }
    ]
  },
  {
    id: 'flame-lamp',
    name: 'Flame Fireplace Lamp',
    description: 'Piece With Flame Fireplace Lamp, a retro-style lamp with a simulated charcoal flame, perfect for adding a cozy touch to interior patios and festive decorations.',
    price: 19.64,
    image: image2,
    rating: 4.5,
    sizes: ['1', '2', '3', '4'],
    dummyDetails: [
      { label: 'Power Mode', value: 'USB' },
      { label: 'Material', value: 'Plastic' },
      { label: 'Battery Properties', value: 'Without Battery' },
      { label: 'Operating Voltage', value: '≤36V' }
    ]
  },
  {
    id: 'column-lamp',
    name: 'Column Floor Lamp',
    description: 'Column Floor Lamp with Shelves, crafted from real solid wood, offering both style and functionality for your space.',
    price: 29.88,
    image: image3,
    rating: 5,
    sizes: ['1', '2', '3', '4'],
    dummyDetails: [
      { label: 'Power Mode', value: 'Power Supply' },
      { label: 'Material', value: 'Wood' },
      { label: 'Battery Properties', value: 'Without Battery' },
      { label: 'Operating Voltage', value: '110V (included)-130V (included)' }
    ]
  },
  {
    id: 'deco-lamp',
    name: 'Art Deco Flower Floor Lamp',
    description: 'Art Deco flower floor lamp with adjustable lighting, perfect for any room.',
    price: 62.90,
    image: image4,
    rating: 4.8,
    sizes: ['1', '2', '3', '4'],
    dummyDetails: [
      { label: 'Power Mode', value: 'Plug Powered' },
      { label: 'Material', value: 'Plastic' },
      { label: 'Battery Properties', value: 'Without Battery' },
      { label: 'Operating Voltage', value: '110V (included)-130V (included)' }
    ]
  }
];
