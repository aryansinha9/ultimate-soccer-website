import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Trophy, Clock, Building2, CheckCircle } from 'lucide-react';
import { createPageUrl } from '@/utils/index.js'; // <-- THIS IS THE FIX

const features = [
  {
    icon: Trophy,
    title: "FIFA GRADE PITCHES",
    description: "Six 5 a-side and one 7 a-side pitch. All are FIFA grade and include a synthetic turf technology which plays just like grass and never gets washed out!"
  },
  {
    icon: Clock,
    title: "NON-STOP PLAY",
    description: "Have you got the minerals to play non-stop CAGE FOOTBALL? Come down & experience our fully enclosed cage system that includes rebound boards, side & roof netting!"
  },
  {
    icon: Building2,
    title: "STATE-OF-THE-ART SOCCER FACILITY",
    description: "Ultimate Soccer is a $4m state-of-the-art floodlit facility that has an elevated clubhouse, includes showers, changing rooms, a modern lounge area & free parking!"
  },
  {
    icon: CheckCircle,
    title: "HASSLE FREE",
    description: "Book now & pay when you play! Alternatively use our online booking system to secure your preferred day and time. Our friendly staff will supply you with free use of a quality ball and bibs."
  }
];

export default function BookPitchInfo() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-screen px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase text-white drop-shadow-lg">
              Feel Like A Kickabout <br/>With Your <span className="text-yellow-400">Mates?</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase text-white drop-shadow-lg">
              Need An All-Weather Pitch For Football Training?
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-200 uppercase tracking-wider drop-shadow-lg">
              Give Us A Shout & We'll Look After You!
            </p>
          </div>
        </div>
      </section>

      {/* Why Book Section - Yellow Banner */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12 uppercase tracking-wider">
            Why Book A Pitch At Ultimate Soccer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-black text-sm text-gray-900 mb-3 leading-tight uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Information Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase leading-tight">
                Looking For The Perfect Training Venue, Or Just Keen For A Casual <span className="text-yellow-400">Kickabout</span> With Your Mates?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                You've come to the right place - Ultimate Soccer is Australia's best soccer venue, boasting six 5 a-side and one 7 a-side FIFA-certified, all-weather synthetic turf soccer pitches that play just like grass and never get washed out. Plus our stadium-quality floodlights let you play day or night and our 'CAGE SYSTEM' includes rebound boards, and full side and roof netting, so the ball is always in play! No more stop-start play, or chasing the balls that have been blasted over the crossbar....
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 uppercase">
                Book a football pitch any time using our 24/7 online booking system
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our online booking system lets you stay one step ahead of the crowd, and makes booking a pitch easy! Book anytime, day or night, and bag the time slot you want. Pitches are available for 60 or 90 minute sessions.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 uppercase">
                Enjoy our clubhouse and free changing facilities
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Want to relax before or after your booking, or invite along some spectators to cheer you on? Enjoy our elevated clubhouse which gives you a full view over the pitches. There are also shower and changing facilities, a comfortable lounge area and we offer free parking for all players and visitors. We have everything covered so you can enjoy the <em>ultimate soccer experience</em>!
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 uppercase">
                After something a little more competitive? Try our 5 a-side soccer leagues
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Keen to take the next step and play competitive games in search of glory? Why not join one of our{' '}
                <Link to={createPageUrl('JoinLeague')} className="text-blue-400 hover:text-blue-300 underline transition-colors font-semibold">
                  5 a-side Leagues
                </Link>
                , soccer{' '}
                <Link to={createPageUrl('Tournaments')} className="text-blue-400 hover:text-blue-300 underline transition-colors font-semibold">
                  Tournaments
                </Link>
                , or organise a Corporate Soccer Event at Ultimate Soccer?
              </p>
            </div>

            <div className="text-center bg-gray-800 rounded-xl p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase">
                Ready to Book Your Pitch?
              </h3>
              <a href="https://secure.ezfacility.com/TMSSelfService/NoAuth/Login.aspx?FID=10522" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold px-12 py-6 rounded-md shadow-lg transform hover:scale-105 transition-all duration-300">
                  BOOK A SOCCER PITCH ONLINE NOW
                </Button>
              </a>
              <p className="text-gray-400 mt-6 text-lg">
                Our 24/7 online booking system makes it easy - book anytime, day or night!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}