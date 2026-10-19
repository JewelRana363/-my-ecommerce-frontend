import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Laptop, Shirt, Watch, Headphones } from 'lucide-react';

export default function Categories() {
  const navigate = useNavigate();

  const categoryList = [
    { name: 'Electronics', count: '12 Items', icon: <Laptop className="w-8 h-8 text-blue-500" />, bg: 'bg-blue-50' },
    { name: 'Fashion', count: '24 Items', icon: <Shirt className="w-8 h-8 text-pink-500" />, bg: 'bg-pink-50' },
    { name: 'Accessories', count: '18 Items', icon: <Watch className="w-8 h-8 text-amber-500" />, bg: 'bg-amber-50' },
    { name: 'Audio', count: '10 Items', icon: <Headphones className="w-8 h-8 text-purple-500" />, bg: 'bg-purple-50' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Shop by Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categoryList.map((cat, idx) => (
          <div 
            key={idx} 
            onClick={() => navigate('/shop')}
            className={`${cat.bg} p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center text-center space-y-3`}
          >
            <div className="p-4 bg-white rounded-full shadow-sm">
              {cat.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800">{cat.name}</h3>
            <span className="text-xs text-gray-500 font-medium">{cat.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}