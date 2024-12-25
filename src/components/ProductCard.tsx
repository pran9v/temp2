import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import { formatPrice } from '../utils/formatters';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <div className="w-full h-full overflow-hidden rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Product Name and Rating */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <div className="flex items-center mb-3">
            <StarRating rating={product.rating} />
          </div>
        </div>

        {/* Product Description */}
        <p className="text-gray-600 mb-4 text-sm line-clamp-5">{product.description}</p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="text-2xl font-bold text-yellow-600">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
