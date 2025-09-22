import React, { useState, useEffect } from 'react';
import { League } from '../Entities/League';

export default function AvailableLeagues() {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeagues();
  }, []);

  const loadLeagues = async () => {
    try {
      const fetchedLeagues = await League.list();
      setLeagues(fetchedLeagues);
    } catch (error) {
      console.error('Error loading leagues:', error);
    }
    setLoading(false);
  };

  // Sample league data structure for display
  const sampleLeagues = [
    {
      day: 'Monday',
      leagueName: 'January Men\'s 7 A-Side',
      details: '$500 Prize Pool',
      startDate: '6th January 2025',
    },
    {
      day: 'Monday',
      leagueName: 'May Men\'s 5 A-Side',
      details: 'Social Division',
      startDate: '5th May 2025',
    },
    {
      day: 'Tuesday',
      leagueName: 'Mixed 5 A-Side',
      details: '$300 Prize Pool',
      startDate: '7th January 2025',
    },
    {
      day: 'Wednesday',
      leagueName: 'Women\'s 5 A-Side',
      details: 'Competitive Division',
      startDate: '8th January 2025',
    },
    {
      day: 'Thursday',
      leagueName: 'Men\'s 5 A-Side Division 1',
      details: '$1000 Prize Pool',
      startDate: '9th January 2025',
    },
    {
      day: 'Thursday',
      leagueName: 'Men\'s 5 A-Side Division 2',
      details: '$500 Prize Pool',
      startDate: '9th January 2025',
    },
    {
      day: 'Friday',
      leagueName: 'Mixed 7 A-Side',
      details: 'Social Division',
      startDate: '10th January 2025',
    },
    {
      day: 'Saturday',
      leagueName: 'Junior 5 A-Side (U16)',
      details: 'Development League',
      startDate: '11th January 2025',
    },
    {
      day: 'Sunday',
      leagueName: 'Over 35\'s 5 A-Side',
      details: '$400 Prize Pool',
      startDate: '12th January 2025',
    }
  ];

  const displayLeagues = leagues.length > 0 ? leagues : sampleLeagues;

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase">
            Join a <span className="text-yellow-400">League</span>
          </h1>
          <p className="text-xl text-gray-300">
            Simply select a league to register. We look forward to seeing you soon!
          </p>
        </div>

        {/* League Table */}
        <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-8 text-center">
              <div className="text-yellow-400">Loading available leagues...</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-yellow-400 font-bold text-lg">Day</th>
                    <th className="px-6 py-4 text-left text-yellow-400 font-bold text-lg">League Name</th>
                    <th className="px-6 py-4 text-left text-yellow-400 font-bold text-lg">Details</th>
                    <th className="px-6 py-4 text-left text-yellow-400 font-bold text-lg">Start Date</th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-bold text-lg"></th>
                  </tr>
                </thead>
                <tbody>
                  {displayLeagues.map((league, index) => (
                    <tr key={index} className={`border-b border-gray-800 ${index % 2 === 0 ? 'bg-black' : 'bg-gray-900'} hover:bg-gray-700 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-white">{league.day}</td>
                      <td className="px-6 py-4 text-white">{league.leagueName || league.name}</td>
                      <td className="px-6 py-4 text-gray-300">{league.details || league.season}</td>
                      <td className="px-6 py-4 text-gray-300">{league.startDate || 'TBC'}</td>
                      <td className="px-6 py-4 text-center">
                        <a 
                          href="https://ultimatesoccer.spawtz.com/Login?ReturnUrl=%2fLeagues%2f4%2fRegistration%2fTeam"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-400 hover:text-red-300 font-semibold underline transition-colors"
                        >
                          Register Online
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Can't find the right league for you? <a href="tel:0297257020" className="text-yellow-400 hover:text-yellow-300 font-semibold">Call us on 02 9725 7020</a> and we'll help you find the perfect fit.
          </p>
        </div>
      </div>
    </div>
  );
}