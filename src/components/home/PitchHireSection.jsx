import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { createPageUrl } from '@/utils';

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function PitchHireSection() {
  return (
    <div className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase">
            Synthetic <br/>Never Sleeps
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Our all-weather pitches are ready 24/7. Rain, shine, or snow - your game goes on.
          </p>
          <Link to={createPageUrl('BookPitch')}>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg">
              HIRE A COURT NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}