import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function ContentBlock() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          GET READY FOR THE <span className="text-yellow-400">ULTIMATE SOCCER EXPERIENCE</span>
        </h2>
        
        <div className="space-y-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">World-class synthetic all-weather pitches</h3>
            <p className="leading-relaxed text-gray-300">
              Our FIFA-grade synthetic surfaces provide the perfect playing conditions year-round. 
              Rain or shine, your game goes ahead on pitches that offer superior ball control, 
              consistent bounce, and optimal player safety.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Professional league competitions</h3>
            <p className="leading-relaxed text-gray-300">
              Join hundreds of players in our competitive 5-a-side and 7-a-side leagues. 
              With multiple divisions catering to all skill levels, you'll find the perfect 
              competition whether you're a weekend warrior or aspiring professional.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">State-of-the-art facilities</h3>
            <p className="leading-relaxed text-gray-300">
              Our indoor complex features changing rooms, equipment hire, refreshments, 
              and spectator seating. Everything you need for the complete soccer experience 
              is right here under one roof.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Expert coaching programs</h3>
            <p className="leading-relaxed text-gray-300">
              Develop your skills with our qualified coaching staff. From beginners' clinics 
              to advanced technique sessions, our programs cater to all ages and abilities.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-800 rounded-xl p-8">
            <p className="text-xl font-semibold text-white mb-6">
              Ready to experience the ultimate in indoor soccer?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="https://ultimatesoccer.spawtz.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8">
                  JOIN A 5 A-SIDE SOCCER LEAGUE TODAY
                </Button>
              </a>
              <span className="text-gray-400 font-medium">OR</span>
              <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold px-8">
                <Phone className="w-5 h-5 mr-2" />
                CALL US ON 02 9725 7020
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}