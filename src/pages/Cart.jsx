import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 hover:underline">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <div className="bg-white rounded-xl shadow-sm p-4 divide-y">
        {cart.map(item => (
          <div key={item.id} className="py-4 flex items-center justify-between gap-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-500 text-sm">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >-</button>
              <span className="px-2">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
        <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        <Link to="/checkout" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}