import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, Heart, User, Search, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      {/* Top Main Navbar */}
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-wide hover:opacity-90 transition">
          <Store className="w-8 h-8 text-blue-500" />
          <span>E-<span className="text-blue-500">Shop</span></span>
        </Link>

        {/* Search Bar - Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
          <input 
            type="text" 
            placeholder="Search products, brands, categories..." 
            className="w-full bg-slate-800 text-sm text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
        </div>

        {/* Right Side Actions (Wishlist, Cart, User Profile) */}
        <div className="hidden md:flex items-center gap-5">
          {/* Wishlist Button */}
          <Link to="/wishlist" className="relative p-2 text-gray-300 hover:text-white transition" title="Wishlist">
            <Heart className="w-6 h-6" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Button */}
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition shadow-md hover:shadow-blue-500/20"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm">Cart</span>
            {cartCount > 0 && (
              <span className="bg-white text-blue-600 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold ml-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account/User Button */}
          <Link to="/account" className="flex items-center gap-2 p-2 text-gray-300 hover:text-white transition" title="Account">
            <User className="w-6 h-6" />
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Sub-header / Category Navigation (Desktop) */}
      <div className="bg-slate-800 border-t border-slate-700/50 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex items-center gap-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-blue-400 font-medium transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-400 font-medium transition">All Products</Link>
          <Link to="/categories" className="hover:text-blue-400 font-medium transition">Categories</Link>
          <Link to="/deals" className="hover:text-blue-400 font-medium transition text-yellow-400">Hot Deals 🔥</Link>
          <Link to="/contact" className="hover:text-blue-400 font-medium transition">Contact Us</Link>
          <Link to="/admin" className="hover:text-blue-400 font-bold transition text-blue-400 border border-blue-500/40 px-2 py-0.5 rounded">Admin Panel</Link>

        </div>
      </div>

      {/* Mobile Responsive Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 pt-3 pb-6 space-y-4">
          {/* Mobile Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-slate-900 text-sm text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-blue-400 border-b border-slate-700">Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-blue-400 border-b border-slate-700">All Products</Link>
            <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-yellow-400 border-b border-slate-700">Hot Deals 🔥</Link>
            <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-blue-400 border-b border-slate-700 flex justify-between items-center">
              Wishlist <span>({wishlistCount})</span>
            </Link>
            <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-blue-400 border-b border-slate-700 flex justify-between items-center">
              Cart <span>({cartCount})</span>
            </Link>
            <Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-blue-400">My Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}