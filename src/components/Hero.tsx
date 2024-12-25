import React from 'react';
import image from '../assets/homeimage.jpg';

export default function Hero() {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="pt-24 pb-20 bg-gradient-to-r from-yellow-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end mt-10"> {/* Added mt-10 */}
            <img
              src={image}
              alt="Lamp Collection"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-l h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
              Brighten Your World with  
              <span className="text-yellow-600"> Stunning Lamps</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
            Discover our handpicked selection of modern lamps, crafted to bring both elegance and warmth to any room. Ideal for enhancing your home's atmosphere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToProducts}
                className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
