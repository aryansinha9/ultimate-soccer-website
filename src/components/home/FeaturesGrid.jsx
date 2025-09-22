import React from 'react';
import { Trophy, Clock, Building2, Users, CheckCircle, PartyPopper, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: "FIFA GRADE PITCHES",
    description: "Professional synthetic surfaces meeting FIFA standards for optimal play"
  },
  {
    icon: Clock,
    title: "NON-STOP PLAY",
    description: "All-weather facility ensures games never get cancelled, rain or shine"
  },
  {
    icon: Building2,
    title: "STATE-OF-THE-ART FACILITY",
    description: "Modern indoor complex with premium amenities and spectator areas"
  },
  {
    icon: Users,
    title: "QUALIFIED REFEREES",
    description: "Professional officials for all competitive matches and tournaments"
  },
  {
    icon: CheckCircle,
    title: "HASSLE-FREE BOOKING",
    description: "Easy online booking system with instant confirmation"
  },
  {
    icon: PartyPopper,
    title: "AMAZING PARTIES",
    description: "Action-packed birthday parties and celebrations for all ages"
  },
  {
    icon: Shield,
    title: "FULLY INSURED",
    description: "Complete insurance coverage for peace of mind while you play"
  },
  {
    icon: Star,
    title: "5-STAR RATED",
    description: "Consistently rated as Sydney's premier indoor soccer facility"
  }
];

export default function FeaturesGrid() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
            Why Choose <span className="text-yellow-400">Ultimate Soccer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sydney's premier indoor soccer facility with everything you need for the perfect game experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 h-full">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-bold text-lg text-yellow-400 mb-3 leading-tight uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}