import React, { useState } from 'react';
import { Plus, Trash2, Package, DollarSign, Image as ImageIcon, Lock, CheckCircle } from 'lucide-react';

export default function Admin({ products, setProducts }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'Electronics',
    image: '',
    description: ''
  });

  // Admin Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    // এখানে আপনার ইচ্ছামতো পাসওয়ার্ড দিতে পারেন, যেমন: "admin123"
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert("Wrong Admin Password!");
      setPassword('');
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill all required fields!");
      return;
    }

    const createdProduct = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      image: newProduct.image,
      description: newProduct.description || 'No description provided.'
    };

    setProducts([createdProduct, ...products]);
    alert("Product added successfully!");

    setNewProduct({
      name: '',
      price: '',
      category: 'Electronics',
      image: '',
      description: ''
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // যদি পাসওয়ার্ড দেওয়া না হয়, তবে লগইন ফর্ম দেখাবে
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
        <div className="text-center space-y-2 mb-6">
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-blue-600">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Login</h1>
          <p className="text-gray-500 text-sm">Enter password to access dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            placeholder="Enter Admin Password (e.g. admin123)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-50 border p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-md"
          >
            Login to Admin
          </button>
        </form>
      </div>
    );
  }

  // পাসওয়ার্ড সঠিক হলে মূল ড্যাশবোর্ড দেখাবে
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm">Manage your store products and inventory</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-xl font-semibold text-xs flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> Logged In
          </span>
          <button 
            onClick={() => setIsAuthenticated(false)} 
            className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-xl font-semibold text-xs transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Add Product Form */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Plus className="w-5 h-5 text-blue-600" /> Add New Product
          </h2>

          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Product Title</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="e.g. Wireless Mouse" 
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full bg-gray-50 border p-2.5 pl-9 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Package className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Price ($)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="99" 
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full bg-gray-50 border p-2.5 pl-9 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <DollarSign className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Category</label>
                <select 
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full bg-gray-50 border p-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Audio">Audio</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Image URL</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="https://images.unsplash.com/..." 
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  className="w-full bg-gray-50 border p-2.5 pl-9 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ImageIcon className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Description</label>
              <textarea 
                rows="3"
                placeholder="Product description..." 
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="w-full bg-gray-50 border p-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition shadow-md"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Right Side: Product List Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-800">All Products List ({products.length})</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50">
                    <td className="p-3 flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-lg" />
                      <span className="font-semibold text-gray-800 line-clamp-1">{product.name}</span>
                    </td>
                    <td className="p-3">
                      <span className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-full font-medium">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-gray-800">${product.price}</td>
                    <td className="p-3 text-center">
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}