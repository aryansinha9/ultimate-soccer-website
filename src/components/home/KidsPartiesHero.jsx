import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { createPageUrl } from '@/utils';

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function KidsPartiesHero() {
  return (
    <div className="relative py-20 bg-gray-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80')"
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase">
              Book A <span className="text-yellow-400">Party</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8 font-light uppercase tracking-wider">
              Zero Fuss + Maximum Fun
            </p>
            <Link to={createPageUrl('KidsParties')}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg">
                START CELEBRATING
              </Button>
            </Link>
          </div>
          
          {/* Cupcake Illustration Area */}
          <div className="hidden lg:block">
            <div className="w-64 h-64 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-6xl">🧁</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}