import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin'; // <-- Admin Page Import

// Initial Products Data Import
import { products as initialProducts } from './data/products';

function App() {
  const [productsList, setProductsList] = useState(initialProducts); // Dynamic Product State
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-between">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} wishlistCount={wishlist.length} />
        
        <main className="container mx-auto p-4 md:p-6 flex-1">
          <Routes>
            <Route path="/" element={<Home products={productsList} addToCart={addToCart} addToWishlist={addToWishlist} />} />
            <Route path="/shop" element={<Shop products={productsList} addToCart={addToCart} addToWishlist={addToWishlist} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/deals" element={<Deals products={productsList} addToCart={addToCart} addToWishlist={addToWishlist} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
            
            {/* Admin Route */}
            <Route path="/admin" element={<Admin products={productsList} setProducts={setProductsList} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;