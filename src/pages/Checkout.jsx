import React, { useState } from 'react';

export default function Checkout({ cart, clearCart }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" required className="w-full border p-2 rounded-lg" />
        <input type="email" placeholder="Email Address" required className="w-full border p-2 rounded-lg" />
        <textarea placeholder="Delivery Address" required className="w-full border p-2 rounded-lg"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700">
          Place Order
        </button>
      </form>
    </div>
  );
}