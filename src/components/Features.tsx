import React from 'react';
import { Heart, Shield, Truck, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-8 w-8 text-yellow-600" />,
    title: 'Elegant Design',
    description: 'Our lamps are designed to bring style and warmth to your home.'
  },
  {
    icon: <Shield className="h-8 w-8 text-yellow-600" />,
    title: 'Durable & Safe',
    description: 'Built with high-quality materials for lasting durability and safety.'
  },
  {
    icon: <Truck className="h-8 w-8 text-yellow-600" />,
    title: 'Fast & Free Shipping',
    description: 'Enjoy fast and free shipping on all orders over $50.'
  },
  {
    icon: <Leaf className="h-8 w-8 text-yellow-600" />,
    title: 'Eco-Friendly',
    description: 'Our products are made from sustainable materials to minimize environmental impact.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-yellow-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Our Lamps</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the perfect lighting for every room in your home.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
