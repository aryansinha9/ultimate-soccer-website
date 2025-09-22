import React from "react";
import { Trophy, Clock, Building2, Users, CheckCircle, PartyPopper } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "FIFA GRADE PITCHES",
    description: "Professional synthetic surfaces meeting FIFA standards"
  },
  {
    icon: Clock,
    title: "NON-STOP PLAY",
    description: "All-weather facility ensures games never get cancelled"
  },
  {
    icon: Building2,
    title: "STATE-OF-THE-ART FACILITY",
    description: "Modern indoor complex with premium amenities"
  },
  {
    icon: Users,
    title: "REFEREES",
    description: "Qualified officials for all competitive matches"
  },
  {
    icon: CheckCircle,
    title: "HASSLE-FREE",
    description: "Easy booking system and professional management"
  },
  {
    icon: PartyPopper,
    title: "KIDS PARTIES",
    description: "Action-packed birthday parties and celebrations"
  }
];

export default function FeaturesBanner() {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-bold text-sm text-yellow-400 mb-2 leading-tight uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}