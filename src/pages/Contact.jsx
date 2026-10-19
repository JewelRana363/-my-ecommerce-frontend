import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-800">Get in Touch</h1>
        <p className="text-gray-500 text-sm">Have a question or feedback? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info Cards */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
          <Phone className="w-8 h-8 text-blue-500 mx-auto" />
          <h3 className="font-bold text-gray-800">Phone</h3>
          <p className="text-xs text-gray-500">+880 1700-000000</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
          <Mail className="w-8 h-8 text-blue-500 mx-auto" />
          <h3 className="font-bold text-gray-800">Email</h3>
          <p className="text-xs text-gray-500">support@eshop.com</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2">
          <MapPin className="w-8 h-8 text-blue-500 mx-auto" />
          <h3 className="font-bold text-gray-800">Location</h3>
          <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {submitted ? (
          <div className="text-center py-8 text-green-600 font-bold">
            Thank you! Your message has been sent successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required className="w-full bg-gray-50 border p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" required className="w-full bg-gray-50 border p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea placeholder="Your Message" rows="4" required className="w-full bg-gray-50 border p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 w-full transition">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}