import React from "react";
import { Video } from "lucide-react";

export default function MatchHighlights() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gray-800 rounded-lg p-12">
          <Video className="w-24 h-24 text-yellow-400 mx-auto mb-8" />
          
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Did You Make Game of the Night?
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Watch the highlights of your team's goals and slip ups here. Scout next week's opposition too.
          </h2>
          
          <div className="text-4xl md:text-6xl font-bold text-yellow-400 uppercase tracking-wider">
            Coming Soon!
          </div>
          
          <p className="text-gray-400 mt-8 text-lg">
            We're working on bringing you the best moments from every match. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}