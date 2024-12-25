import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-r from-yellow-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect lamp for your home
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
