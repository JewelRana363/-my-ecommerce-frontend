import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Flame } from 'lucide-react';

export default function Deals({ addToCart, addToWishlist }) {
  // Showing sample products as discounted deals
  const dealProducts = products.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl p-8 shadow-lg flex items-center justify-between">
        <div>
          <span className="bg-white/20 text-xs uppercase px-3 py-1 rounded-full font-bold">Mega Sale</span>
          <h1 className="text-3xl font-black mt-2 flex items-center gap-2">
            Hot Deals & Offers <Flame className="w-8 h-8 text-yellow-300" />
          </h1>
          <p className="text-white/80 text-sm mt-1">Get special discounts up to 50% on selected items.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dealProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />
        ))}
      </div>
    </div>
  );
}
