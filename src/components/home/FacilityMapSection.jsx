import React from 'react';

export default function FacilityMapSection() {
  const address = "405 THE HORSLEY DRIVE, FAIRFIELD NSW 2165";
  const googleMapsUrl = "https://maps.app.goo.gl/UNxFhmSxuPaCAYaYA";

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
            Facility Map
          </h2>
          <p className="text-xl text-gray-600">
            8 Professional FIFA-grade pitches at your disposal
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <div className="relative">
            {/* Pitch Layout Visualization */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {/* Top Row */}
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">1</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg col-span-2">
                <div className="text-2xl mb-2">2</div>
                <div className="text-sm">7-A-SIDE</div>
              </div>
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">3</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              
              {/* Middle Row */}
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">4</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">5</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">6</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">7</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              
              {/* Bottom Row */}
              <div className="bg-green-600 text-white p-6 text-center font-bold rounded-lg">
                <div className="text-2xl mb-2">8</div>
                <div className="text-sm">5-A-SIDE</div>
              </div>
              <div className="bg-yellow-400 text-gray-900 p-6 text-center font-bold rounded-lg col-span-2">
                <div className="text-2xl mb-2">TRAINING</div>
                <div className="text-sm">PITCH</div>
              </div>
              <div className="bg-gray-300 p-6 text-center font-bold rounded-lg">
                <div className="text-lg mb-2">AMENITIES</div>
                <div className="text-xs">CHANGING ROOMS</div>
              </div>
            </div>
            
            {/* Address with Google Maps Link */}
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-gray-900 text-white p-4 rounded-lg text-center transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-900"
            >
              <div className="text-lg font-semibold uppercase tracking-wider">
                {address}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}