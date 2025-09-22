import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function KidsPartiesSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="relative min-h-[500px] bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
       <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[500px] px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            THE <span className="text-yellow-400">BEST KIDS PARTIES</span> IN AUSTRALIA!
          </h2>
          
          <p className="text-xl mb-8 text-gray-300">
            Give your child an unforgettable birthday experience with professional coaching, 
            games, and celebration on our FIFA-grade pitches.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setShowVideoModal(true)}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-500 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">WATCH PARTY HIGHLIGHTS</span>
            </Button>
            
            <Link to={createPageUrl("KidsParties")}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8">
                BOOK YOUR PARTY NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="max-w-4xl bg-gray-800 border-yellow-400 text-white">
          <DialogHeader>
            <DialogTitle className="text-yellow-400">Kids Party Highlights</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-70" />
              <p className="text-lg">Amazing birthday party moments</p>
              <p className="text-sm opacity-70 mt-2">Kids party highlights video would play here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}