import React from 'react';
import { Link } from 'react-router-dom';
// import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Trophy, Clock, Building2, Users, CheckCircle } from 'lucide-react';
import { createPageUrl } from '@/utils/index.js'; // Note the path is different


const features = [
  {
    icon: Trophy,
    title: "FIFA GRADE PITCHES",
    description: "Six 5 a-side and one 7 a-side pitch. All are FIFA grade and include a synthetic turf technology which plays just like grass and never gets washed out!"
  },
  {
    icon: Clock,
    title: "NON-STOP PLAY",
    description: "Have you got the minerals to play non-stop cage football? Come down & experience our fully enclosed cage system that includes rebound boards, side & roof netting!"
  },
  {
    icon: Building2,
    title: "STATE-OF-THE-ART SOCCER FACILITY",
    description: "Ultimate Soccer is a $2m state-of-the-art floodlit facility that has an elevated clubhouse, includes showers, changing rooms, a modern lounge area & free parking!"
  },
  {
    icon: Users,
    title: "QUALIFIED REFEREES",
    description: "Focus your attention on the game and we'll supply fully qualified referees to officiate your league match so that each game is fair and safe!"
  },
  {
    icon: CheckCircle,
    title: "HASSLE FREE",
    description: "Book now & pay when you play! Alternatively use our online booking system to secure your preferred day and time. Our friendly staff will supply you with free use of a quality ball and bibs."
  }
];

export default function JoinLeague() {
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
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase">
              Join An Ultimate <br/>Soccer <span className="text-yellow-400">League</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 font-light text-gray-200">
              Find the perfect competitive or social league for you and your team.
            </p>
            
            <a href="https://ultimatesoccer.spawtz.com/registration/leagues" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-12 py-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                SEE AVAILABLE LEAGUES & REGISTER
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Banner - Why Join? */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-3 leading-tight uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed League Information */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">
              Fancy Something <span className="text-yellow-400">Competitive</span>? Get Involved In Our 5 & 7 A-Side Leagues
            </h2>
            
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <p>
                Whether you're after a competitive 5 a-side or 7 a-side soccer league to win some awesome prizes, or a midweek game for a bit of fun and fitness our 5 a-side and 7 a-side football leagues have levels that are suitable for everyone. Leagues are run over a 15, 16 or 20-week period, with one match per week, culminating in teams battling it out in the Finals! Fully qualified referees take charge of all league games and our purpose built soccer centre has facilities second to none. All that's left for you to do is to sign up for the Ultimate Soccer experience
              </p>

              <h3 className="text-2xl font-bold text-yellow-400 pt-6">
                Men's, women's and mixed soccer league divisions
              </h3>
              <p>
                With men's, women's, mixed and junior leagues available with up to 4 divisions per night, there really are no excuses now! Click on 'Join a League' to see the most up to date information on available divisions and leagues.
              </p>

              <h3 className="text-2xl font-bold text-yellow-400 pt-6">
                Huge choice of 5 a-side or 7 a-side leagues
              </h3>
              <p>
                We understand that your team members have busy schedules. That's why Ultimate Soccer offers leagues 7 days a week, so you can choose a league that best suits you and your team members. We also offer flexible kick off times to make playing in our competitions as convenient as possible. Looking for more of a challenge on top of your weekly league games? Check out our upcoming soccer Tournaments, where you can win some extra cash for the team kitty. We also host tailor made Corporate Soccer Events, which are perfect for team building and client entertainment.
              </p>

              <h3 className="text-2xl font-bold text-yellow-400 pt-6">
                Register your 5 a-side or 7 a-side soccer team online today
              </h3>
              <p>
                Registering your team online is quick and easy, and it's all done through our online booking system. League fees for 5 a-side are $100 per team per week, so for a 9-player team, it's just $11 per player per game! 7 a-side is a similar cost per player per game. Plus, no registration fees!
              </p>

              <div className="pt-8">
                <Link 
                  to={createPageUrl('AvailableLeagues')} 
                  className="text-yellow-400 hover:text-yellow-300 font-bold text-xl transition-colors"
                >
                  JOIN A 5 A-SIDE OR 7 A-SIDE SOCCER LEAGUE TODAY &gt;&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}