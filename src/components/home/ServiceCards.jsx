import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { createPageUrl } from '@/utils';
import { ArrowRight, Play, Users, Cake } from 'lucide-react';

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

const services = [
  {
    title: 'Pitch Hire',
    description: 'Book our FIFA-grade, all-weather pitches for a casual kickabout or training session.',
    link: createPageUrl('BookPitch'),
    icon: Play,
    imageUrl: 'https://images.unsplash.com/photo-1599334433857-c79b9a68c4d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Coaching',
    description: 'Elevate your game with our expert coaches. Programs available for all ages and skill levels.',
    link: createPageUrl('Coaching'),
    icon: Users,
    imageUrl: 'https://images.unsplash.com/photo-1551893301-49339e33b66d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Kids Parties',
    description: 'Celebrate your child\'s birthday with an action-packed soccer party they\'ll never forget.',
    link: createPageUrl('KidsParties'),
    icon: Cake,
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function ServiceCards() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <Card key={service.title} className="bg-gray-800 border-gray-700 text-white rounded-lg overflow-hidden group">
              <div className="relative h-56">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute top-4 right-4 bg-yellow-400 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 h-20">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}