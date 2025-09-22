import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import { League } from "../entities/League";
import { ChevronRight } from "lucide-react";

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function LeagueTables() {
  const [activeDay, setActiveDay] = useState(null);
  const [selectedLeague, setSelectedLeague] = useState(null);
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

  const leaguesByDay = useMemo(() => {
    return leagues.reduce((acc, league) => {
      const day = days.find(d => league.name.toLowerCase().startsWith(d.toLowerCase()));
      if (day) {
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(league);
      }
      return acc;
    }, {});
  }, [leagues]);
  
  const handleDayClick = (day) => {
    setActiveDay(currentActiveDay => currentActiveDay === day ? null : day);
    // Do not clear selected league when collapsing
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            League <span className="text-yellow-400">Tables</span>
          </h1>
          <p className="text-lg text-gray-300">
            Select a day, then choose a league to view its standings
          </p>
          <Link to={createPageUrl('BootRoom')} className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            &larr; Back to The Boot Room
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - Day & League Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 uppercase">Select League</h3>
              <nav className="space-y-1">
                {days.map((day) => (
                  <div key={day}>
                    <button
                      onClick={() => handleDayClick(day)}
                      className="w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-colors bg-gray-700 text-gray-200 hover:bg-gray-600 font-semibold"
                    >
                      {day}
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeDay === day ? 'rotate-90' : ''}`} />
                    </button>
                    {activeDay === day && (
                      <div className="pl-4 mt-2 space-y-2">
                        {(leaguesByDay[day] || []).map(league => (
                          <button
                            key={league.id}
                            onClick={() => setSelectedLeague(league)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedLeague?.id === league.id
                                ? 'bg-yellow-400 text-gray-900 font-bold'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            {league.name.replace(new RegExp(`^${day}\\s*`, 'i'), '')}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column - League Table */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg overflow-hidden min-h-[500px]">
              {loading ? (
                <div className="p-8 text-center text-yellow-400">Loading league data...</div>
              ) : selectedLeague ? (
                <>
                  <div className="bg-yellow-400 text-gray-900 p-6">
                    <h2 className="text-2xl font-bold uppercase">{selectedLeague.name}</h2>
                    <p className="opacity-80">{selectedLeague.season}</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-yellow-400 font-semibold">Team</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">P</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">W</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">L</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">D</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">GF</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">GA</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">GD</th>
                          <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Pts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedLeague.teams && selectedLeague.teams.map((team, index) => (
                          <tr key={index} className={`border-b border-gray-700 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}`}>
                            <td className="px-4 py-3 font-medium">{team.name}</td>
                            <td className="px-4 py-3 text-center">{team.played}</td>
                            <td className="px-4 py-3 text-center text-green-400">{team.won}</td>
                            <td className="px-4 py-3 text-center text-red-400">{team.lost}</td>
                            <td className="px-4 py-3 text-center text-yellow-400">{team.drawn}</td>
                            <td className="px-4 py-3 text-center">{team.goals_for}</td>
                            <td className="px-4 py-3 text-center">{team.goals_against}</td>
                            <td className="px-4 py-3 text-center font-semibold">
                              {team.goals_for - team.goals_against > 0 ? '+' : ''}{team.goals_for - team.goals_against}
                            </td>
                            <td className="px-4 py-3 text-center font-bold text-yellow-400">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <div className="p-8 flex items-center justify-center h-full text-center text-gray-400">
                  <p>Please select a league from the left to view its table.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}