import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Users, Clock, Trophy, Star, Shield, Award } from 'lucide-react';

// This is the data for the TOP section (our polished version)
const programs = [
  {
    title: 'Kids Development (5-12 years)',
    description: 'Fun-focused sessions building fundamental skills, ball control, and love for the game.',
    duration: '1 hour - Weekly',
    price: '$25 per session',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Junior Skills (13-17 years)',
    description: 'Technical development with tactical awareness for competitive play.',
    duration: '1.5 hours - Twice weekly',
    price: '$35 per session',
    image: 'https://images.unsplash.com/photo-1551893301-49339e33b66d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Adult Training (18+ years)',
    description: 'Fitness-focused sessions with advanced tactical training.',
    duration: '1 hour - Weekly',
    price: '$30 per session',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
  }
];

// This is the data for the BOTTOM sections (from your new code)
const holidayFeatures = [
  {
    icon: Trophy,
    title: "FIFA GRADE PITCHES",
    description: "Six 5 a-side and one 7 a-side pitches. All are FIFA grade and include a synthetic turf technology which plays just like grass and never gets washed out!"
  },
  {
    icon: Award,
    title: "QUALIFIED COACHES",
    description: "All of our coaches are highly qualified and have experience coaching around the world, developing and designing cutting edge sessions."
  },
  {
    icon: Shield,
    title: "SAFE",
    description: "Ultimate Soccer uses only all weather artificial 3G pitches inside for the perfect coaching location, with parents able to watch the action from the comfort of the club house!"
  },
  {
    icon: Users,
    title: "PARENTS LEAGUES",
    description: "Why not keep those legs busy while the kids are training sessions!"
  },
  {
    icon: Star,
    title: "TESTIMONIALS",
    description: "I've been involved in football for over 25 years, this is by far the best soccer school I have ever had the pleasure of being involved in. - David Carroll (Parent)"
  }
];

// Temporary utility function
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function Coaching() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header (Shared) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
            Coaching <span className="text-yellow-400">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert coaching for all ages and skill levels. Our qualified coaches focus on skill development, 
            tactical awareness, and building confidence on the pitch.
          </p>
        </div>

        {/* --- OUR POLISHED PROGRAMS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white rounded-xl flex flex-col overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <CardTitle className="text-yellow-400 text-2xl font-bold mb-4">{program.title}</CardTitle>
                <p className="text-gray-300 flex-grow mb-6">{program.description}</p>
                <div className="space-y-3 pt-4 mb-6">
                  <div className="flex items-center gap-3 text-lg">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Trophy className="w-5 h-5 text-green-400" />
                    <span className="text-white">{program.price}</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg py-4 text-lg font-semibold mt-auto">
                  Join Program
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* --- YOUR NEW CONTENT SECTIONS START HERE --- */}
        <section className="relative mb-16 rounded-xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase drop-shadow-lg">
              We Run Term Time <br/>And <br/><span className="text-yellow-400">School Holiday Coaching Clinics</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider drop-shadow-lg">
              Beginner & Intermediate
            </p>
          </div>
        </section>

        <div className="bg-gray-800 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-8 uppercase">
            Kids Holiday Coaching Camps
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
            <p>
              Looking for a way to get the kids off the PlayStation and doing something active during the school holidays? Ultimate Soccer's Kids Holiday Coaching Camps are the perfect way to nurture and develop their passion and talent for playing football in a safe and fun environment!
            </p>
            <p>
              Our 5-day action-packed fun courses are run during school holiday periods, and are designed for kids aged 4-14. Sessions will focus on developing technique, game understanding, improve confidence while having fun and making new friends at the same time. All abilities are welcome with a focus on beginners and intermediate.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 uppercase">
              Perfect environment for football development in our FIFA-grade facility
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Kids Holiday Coaching Camps are five consecutive days, and are run at our $4,000,000 FIFA-grade facility, which provides the perfect environment for kids to learn and have fun during their school holidays. The fully enclosed "cage" nature of Ultimate Soccer's pitches - including rebound boards, side and roof netting - provides a premium coaching environment that improves touches, ball control, movement and shooting practices! Best of all? Parents can relax and watch from the comfort of our elevated clubhouse, which has views over all 8 pitches. Ultimate Soccer even offers a range of{' '}
              <Link to={createPageUrl('KidsParties')} className="text-blue-400 hover:text-blue-300 underline transition-colors font-semibold">
                Kids Soccer Party Packages
              </Link>
              {' '}available to suit all group sizes and budgets.
            </p>
          </div>

          <div className="bg-red-600 rounded-lg p-6 mb-8">
            <p className="text-white font-bold text-lg text-center uppercase">
              Sessions are designed and delivered by ex-professionals, FFA and UEFA qualified coaches and run in-line with the FFA National Curriculum.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <p className="text-yellow-400 font-black text-xl uppercase tracking-wider">
              Limited spaces are available in each holiday coaching camp, so book online today, or call us on 02 9725 7020.
            </p>
          </div>
        </div>

        <section className="bg-yellow-400 py-16 rounded-xl mb-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12 uppercase tracking-wider">
              Kids Holiday Soccer Coaching Camps Feature
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {holidayFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-black text-sm text-gray-900 mb-3 leading-tight uppercase tracking-wider">
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

        <div className="bg-gray-800 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-8 uppercase text-center">
            Sessions Focus On Developing Technique, Game Understanding, Improving Confidence & Providing A Fun Learning Experience
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              At Ultimate Soccer we believe that in ensuring that players are training within a group that suits their playing ability. This way individuals are able to take the most out of each session!
            </p>
            <p>
              Our development Squad is perfect for beginners and players who have a basic skill level. Sessions are focused aimed towards players whose main focus is to have fun!
            </p>
            <p>
              Our advanced squad is designed to teach and develop soccer skills and game understanding. This squad is for players with a solid skill level whose goal is to progress their game!
            </p>
            <p>
              Both clinics run for 10 weeks, and are specifically designed to ensure that all of the basic soccer skills are introduced and taught in a fun and exciting atmosphere.
            </p>
            <p>
              Week 10 concludes the program with a world cup tournament, water fight and player presentation.
            </p>
            <p className="font-semibold text-white">
              Nike training kit is included for both squads!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Why Train With Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Star className="w-7 h-7 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Qualified Coaches</h3>
                  <p className="text-gray-300">All our coaches hold recognized coaching qualifications and have extensive playing experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Small Group Focus</h3>
                  <p className="text-gray-300">Maximum 12 players per session ensures personalized attention for every participant.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Trophy className="w-7 h-7 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Proven Results</h3>
                  <p className="text-gray-300">Many of our players have progressed to representative teams and professional academies.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Ready to Start?</h3>
            <p className="text-gray-300 mb-6">
              Contact us to book a trial session or get more information about our coaching programs.
            </p>
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 rounded-lg py-3 font-semibold">
                Book Trial Session
              </Button>
              <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-white hover:text-yellow-400 rounded-lg py-3 font-bold transition-colors duration-300">
                Call: 02 9725 7020
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}