import React from 'react';
import { Store, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6 border-t border-slate-800 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <Store className="w-7 h-7 text-blue-500" /> E-Shop
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop destination for high quality products. Enjoy fast delivery and best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/shop" className="hover:text-blue-400 transition">Shop All</a></li>
            <li><a href="/cart" className="hover:text-blue-400 transition">Shopping Cart</a></li>
            <li><a href="/deals" className="hover:text-blue-400 transition">Special Deals</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Track Order</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Dhaka, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> +880 1700-000000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /> support@eshop.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}