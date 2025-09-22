import React from 'react';

export default function GoogleMapSection() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
            FIND <span className="text-yellow-400">US</span>
          </h2>
          <p className="text-xl text-gray-300">
            Located at Fairfield High School, easy to access with plenty of free parking.
          </p>
        </div>
        
        <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800">
          <iframe
            // --- THIS IS THE NEW, UPDATED URL ---
            src="https://maps.google.com/maps?q=Ultimate%20Soccer,%20405%20The%20Horsley%20Drive,%20Fairfield%20NSW%202165&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}