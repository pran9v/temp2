import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Upload Your Photo',
    description: 'Choose your best selfie or portrait photo to get started.'
  },
  {
    number: '2',
    title: 'Select Your Style',
    description: 'Pick from various professional styles and backgrounds.'
  },
  {
    number: '3',
    title: 'AI Enhancement',
    description: 'Our AI transforms your photo into a professional headshot.'
  },
  {
    number: '4',
    title: 'Download & Share',
    description: 'Get your new professional photos in minutes.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get your professional headshot in four simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}