import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize, quantity } = location.state || {};

  if (!product) {
    navigate('/');
    return null;
  }

  // Calculate total price
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-[#FEFCE8] flex items-center justify-center py-12 pt-32">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
        <div className="text-center mb-6">
          <CheckCircle className="mx-auto w-16 h-16 text-green-500" />
          <h1 className="text-3xl font-semibold text-gray-900 mt-4 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for your purchase of {product.name}.
          </p>
        </div>

        <div className="bg-[#F7F7F7] rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4 text-gray-700">
            <span className="font-medium">Product:</span>
            <span>{product.name}</span>
          </div>
          <div className="flex justify-between mb-4 text-gray-700">
            <span className="font-medium">Price per unit:</span>
            <span>${product.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-gray-700">
            <span className="font-medium">Quantity:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-yellow-200 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
