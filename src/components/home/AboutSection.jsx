import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">
              Sydney's Premier <span className="text-yellow-400">Indoor Soccer</span> Destination
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-white">Ultimate Soccer Fairfield</span> has been the heart of Sydney's indoor soccer community for over a decade. Our state-of-the-art facility features 8 FIFA-grade synthetic pitches, professional lighting, and climate-controlled comfort.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're looking to join a competitive league, book a casual game with friends, or celebrate a special occasion, we provide the ultimate soccer experience for players of all ages and skill levels.
              </p>
              <p className="text-lg leading-relaxed">
                From beginner-friendly social competitions to high-intensity championship matches, our facility hosts over 200 teams across multiple divisions throughout the year.
              </p>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-white font-semibold">405 The Horsley Drive</p>
                  <p className="text-gray-300">Fairfield NSW 2165</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-white font-semibold">02 9725 7020</p>
                  <p className="text-gray-300">Call us for bookings & enquiries</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-white font-semibold">Open 7 Days</p>
                  <p className="text-gray-300">6AM - 11PM Daily</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="w-full h-96 bg-cover bg-center rounded-xl shadow-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">8 Professional Pitches</p>
              <p className="text-lg">FIFA-Grade Synthetic Surfaces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}