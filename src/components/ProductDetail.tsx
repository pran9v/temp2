import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import StarRating from './StarRating';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1); // State to track selected quantity

  // Scroll to top when component mounts or when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl text-gray-700">Product not found</div>;
  }

  const handleAddToCart = () => {
    navigate('/order-confirmation', {
      state: { product, selectedSize, quantity } // Pass size and quantity along with product
    });
  };

  return (
    <div className="min-h-screen bg-[#FEFCE8] pt-36 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="h-full w-full object-cover rounded-lg"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {product.name}
              </h1>
              <div className="mb-4">
                <StarRating rating={product.rating} />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                {product.description}
              </p>

              {/* Displaying Dummy Details */}
              <div className="space-y-4 mb-6">
                {product.dummyDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between text-sm text-gray-600">
                    <span>{detail.label}</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>


              {/* Quantity selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Choose Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(Number(e.target.value))} // Update quantity here
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              <div className="flex justify-between items-center mt-8">
                <div className="text-3xl font-bold text-gray-800">
                  ${(product.price * quantity).toFixed(2)}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
