import React from "react";
import { UserPlus } from "lucide-react";

export default function RegisterTeam() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gray-800 rounded-lg p-12">
          <UserPlus className="w-24 h-24 text-yellow-400 mx-auto mb-8" />
          
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Register a League Team
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Online team registration will be available here before the next season starts.
          </h2>
          
          <div className="text-4xl md:text-6xl font-bold text-yellow-400 uppercase tracking-wider">
            Coming Soon!
          </div>
          
          <p className="text-gray-400 mt-8 text-lg">
            Register your entire team for the new season with our streamlined online process.
          </p>
        </div>
      </div>
    </div>
  );
}