import React from 'react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <div className="bg-yellow-400 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          GOT A QUESTION? CALL <span className="text-gray-900 font-bold">9560 6555</span>
        </h2>
        <p className="text-gray-800">
          Our friendly team is here to help with bookings, leagues, and general enquiries
        </p>
      </div>
    </div>
  );
}
