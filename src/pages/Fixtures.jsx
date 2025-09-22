import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import { League } from "../entities/League";
import { Calendar, Clock, ChevronRight } from "lucide-react";

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Fixtures() {
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
  };
  
  const isMatchCompleted = (fixture) => {
    return fixture.status === 'completed';
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            Results & <span className="text-yellow-400">Fixtures</span>
          </h1>
          <p className="text-lg text-gray-300">
            Select a day, then choose a league to view its matches
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

          {/* Right Column - Fixtures and Results */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg overflow-hidden min-h-[500px]">
              {loading ? (
                <div className="p-8 text-center text-yellow-400">Loading fixture data...</div>
              ) : selectedLeague ? (
                <>
                  <div className="bg-yellow-400 text-gray-900 p-6">
                    <h2 className="text-2xl font-bold uppercase">{selectedLeague.name}</h2>
                    <p className="opacity-80">{selectedLeague.season}</p>
                  </div>
                  
                  <div className="p-6">
                    {selectedLeague.fixtures && selectedLeague.fixtures.length > 0 ? (
                      <div className="space-y-6">
                        {/* Results Section */}
                        <div>
                          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Recent Results
                          </h3>
                          <div className="space-y-3">
                            {selectedLeague.fixtures
                              .filter(fixture => isMatchCompleted(fixture))
                              .slice(0, 5)
                              .map((fixture, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg p-4">
                                  <div className="flex justify-between items-center">
                                    <div className="flex-1 text-center">
                                      <span className="font-semibold">{fixture.home_team}</span>
                                      <span className="mx-4 text-2xl font-bold text-yellow-400">
                                        {fixture.home_score}
                                      </span>
                                      <span className="text-gray-400">-</span>
                                      <span className="mx-4 text-2xl font-bold text-yellow-400">
                                        {fixture.away_score}
                                      </span>
                                      <span className="font-semibold">{fixture.away_team}</span>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      {new Date(fixture.date).toLocaleDateString('en-AU', { 
                                        day: 'numeric', 
                                        month: 'short' 
                                      })}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Fixtures Section */}
                        <div>
                          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Upcoming Fixtures
                          </h3>
                          <div className="space-y-3">
                            {selectedLeague.fixtures
                              .filter(fixture => fixture.status === 'scheduled')
                              .slice(0, 5)
                              .map((fixture, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg p-4">
                                  <div className="flex justify-between items-center">
                                    <div className="flex-1 text-center">
                                      <span className="font-semibold">{fixture.home_team}</span>
                                      <span className="mx-6 text-gray-400">vs</span>
                                      <span className="font-semibold">{fixture.away_team}</span>
                                    </div>
                                    <div className="text-sm text-gray-300">
                                      <div>{new Date(fixture.date).toLocaleDateString('en-AU', { 
                                        weekday: 'short',
                                        day: 'numeric', 
                                        month: 'short' 
                                      })}</div>
                                      <div className="text-yellow-400 font-semibold">{fixture.time}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 py-8">
                        <p>No fixtures available for this league.</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="p-8 flex items-center justify-center h-full text-center text-gray-400">
                  <p>Please select a league from the left to view its fixtures and results.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}