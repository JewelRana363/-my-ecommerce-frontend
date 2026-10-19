import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Home({ addToCart, addToWishlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  // Dynamically extract unique categories from products data
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10 pb-10">
      
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-400/30">
            <Sparkles className="w-4 h-4 text-yellow-400" /> Exclusive Deals & Discounts
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
            Discover Exceptional Products Everyday
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Explore our curated selection of high-quality electronics, fashionable wear, and lifestyle accessories at unbeatable prices.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a 
              href="#products-section" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              <ShoppingBag className="w-5 h-5" /> Start Shopping
            </a>
            <button 
              onClick={() => { setCategory('Electronics'); }} 
              className="bg-slate-800 hover:bg-slate-700 text-gray-200 font-semibold px-6 py-3 rounded-xl flex items-center gap-2 border border-slate-700 transition"
            >
              Tech Deals <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div id="products-section" className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <input 
            type="text" 
            placeholder="Search products by name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 pl-11 pr-4 py-2.5 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3" />
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                category === cat 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
          {category === 'All' ? 'All Products' : `${category} Collection`}
          <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-2.5 py-0.5 rounded-full">
            {filteredProducts.length} Items
          </span>
        </h2>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-lg font-medium">No products found matching "{searchTerm}"</p>
          <button 
            onClick={() => { setSearchTerm(''); setCategory('All'); }}
            className="mt-4 text-sm text-blue-600 font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

    </div>
  );
}