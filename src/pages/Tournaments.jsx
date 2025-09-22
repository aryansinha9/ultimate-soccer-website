import React from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Trophy, DollarSign } from "lucide-react";

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function Tournaments() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Banner */}
        <div className="relative mb-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative p-12 text-center">
            <div className="text-6xl md:text-8xl font-black text-black mb-4">
              $10,000
            </div>
            <div className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wider">
              Prize Tournament
            </div>
            <div className="text-xl text-black/80 mt-2">
              KOTF Ultimate Soccer Championship
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            Ultimate <span className="text-yellow-400">Tournaments</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Compete in our special tournament events for glory, prizes, and bragging rights
          </p>
          <Link to={createPageUrl('BootRoom')} className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            &larr; Back to The Boot Room
          </Link>
        </div>

        {/* Key Information Block */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Calendar className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="font-bold text-yellow-400 mb-2">Date</h3>
            <p className="text-gray-300">TBC</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Clock className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold text-yellow-400 mb-2">Time</h3>
            <p className="text-gray-300">TBC</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Trophy className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-yellow-400 mb-2">Format</h3>
            <p className="text-gray-300">5-a-side Knockout</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <DollarSign className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="font-bold text-yellow-400 mb-2">Entry Fee</h3>
            <p className="text-gray-300">TBC</p>
          </div>
        </div>

        {/* Main Description */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Tournament Details</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Get ready for the ultimate soccer experience at our premium tournament event. This high-stakes competition 
              brings together the best teams from across Sydney for an action-packed day of world-class football.
            </p>
            <p>
              With a massive prize pool and professional-level organization, this tournament represents the pinnacle 
              of competitive indoor soccer. Teams will battle it out on our FIFA-grade synthetic pitches in front of 
              cheering crowds and professional officials.
            </p>
            <p>
              Whether you're a seasoned competitor or looking to test your skills against the best, this tournament 
              offers the perfect platform to showcase your team's talent and potentially walk away with a substantial 
              prize that will make all the training worthwhile.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <a href="https://ultimatesoccer.spawtz.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-6 text-xl">
              REGISTER YOUR TEAM NOW
            </Button>
          </a>
          <p className="text-gray-400 mt-4">
            Registration opens soon. Limited spots available - secure your team's place early!
          </p>
        </div>

        {/* Sponsors Section */}
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-8">Tournament Sponsors</h3>
          <div className="flex justify-center items-center gap-12">
            <div className="bg-gray-700 px-8 py-4 rounded-lg">
              <div className="text-2xl font-bold text-white">SPONSOR 1</div>
            </div>
            <div className="bg-gray-700 px-8 py-4 rounded-lg">
              <div className="text-2xl font-bold text-white">SPONSOR 2</div>
            </div>
          </div>
          <p className="text-gray-400 mt-6">
            Interested in sponsoring our tournaments? Contact us at fairfield@ultimatesoccer.com.au
          </p>
        </div>

      </div>
    </div>
  );
}