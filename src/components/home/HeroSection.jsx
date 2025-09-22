import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Background Video Simulation */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-start h-screen px-6 md:px-12 lg:px-24">
        <div className="text-left text-white max-w-lg">
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight uppercase">
            Summer <br/>5-A-Side 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-200 uppercase tracking-widest">
            Starts September 1st
          </p>
          
          <a href="https://ultimatesoccer.spawtz.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-10 py-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              REGISTER HERE
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}