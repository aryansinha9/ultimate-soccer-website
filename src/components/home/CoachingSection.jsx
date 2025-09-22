import React from 'react';
import { Button } from '@/Components/ui/button';
import { Link } from 'react-router-dom';

// This is a temporary utility function. We will create a proper utils file later.
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function CoachingSection() {
  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551893301-49339e33b66d?auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 uppercase">
            Coaching <br/>Programs
          </h2>
          <p className="text-xl text-gray-700 mb-8 font-light">
            Expert coaching for all ages and skill levels. From beginners to advanced players.
          </p>
          <Link to={createPageUrl('Coaching')}>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg">
              VIEW HERE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}