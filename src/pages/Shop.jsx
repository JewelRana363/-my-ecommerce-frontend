import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop({ addToCart, addToWishlist }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter
  let filtered = products.filter(p => selectedCategory === 'All' || p.category === selectedCategory);

  // Sort
  if (sortBy === 'low-to-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-to-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-slate-800">All Products ({filtered.length})</h1>
        
        <div className="flex gap-4 w-full md:w-auto">
          {/* Category Filter */}
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          {/* Price Sorting */}
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Sort by: Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />
        ))}
      </div>
    </div>
  );
}