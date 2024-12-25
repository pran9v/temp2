import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="pt-32 pb-16 bg-gradient-to-r from-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Contact Us</h2>
        <p className="mb-8 text-xl text-gray-600 text-center">
          Have questions? Reach out to us at: 
          <a href="mailto:email@emgila.com" className="text-yellow-600 hover:underline"> support@lampshade.site</a>
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              rows={6}
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
