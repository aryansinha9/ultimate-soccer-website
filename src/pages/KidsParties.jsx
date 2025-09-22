import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Clock, Users, Gift, Star, Check } from 'lucide-react';

const packages = [
  // ... (packages array remains the same)
  {
    title: 'Basic Party Package',
    price: '$299',
    duration: '2 hours',
    includes: [
      'Exclusive pitch hire',
      'Qualified party coach',
      'Soccer games & activities',
      'Basic decorations',
      'Party invitations'
    ]
  },
  {
    title: 'Premium Party Package',
    price: '$399',
    duration: '2.5 hours',
    popular: true,
    includes: [
      'Exclusive pitch hire',
      'Qualified party coach',
      'Soccer games & activities',
      'Premium decorations',
      'Party invitations',
      'Soccer-themed party bags',
      'Medal for birthday child'
    ]
  },
  {
    title: 'Ultimate Party Package',
    price: '$499',
    duration: '3 hours',
    includes: [
      'Exclusive pitch hire',
      'Two qualified party coaches',
      'Extended games & activities',
      'Deluxe decorations',
      'Custom invitations',
      'Premium party bags',
      'Medals for all children',
      'Professional photos'
    ]
  }
];

export default function KidsParties() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section (remains the same) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
            KIDS <span className="text-yellow-400">PARTIES</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Give your child the ultimate birthday celebration! Our action-packed soccer parties 
            combine fun games, skilled coaching, and unforgettable memories.
          </p>
          <div className="text-2xl font-semibold text-blue-400 uppercase tracking-wider">
            ZERO FUSS + MAXIMUM FUN
          </div>
        </div>

        {/* Packages Section (remains the same) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
           {packages.map((pkg, index) => (
            <Card key={index} className={`bg-gray-800 border-gray-700 text-white relative overflow-hidden flex flex-col rounded-xl ${
              pkg.popular ? 'ring-2 ring-yellow-400' : ''
            }`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center py-8">
                <CardTitle className="text-2xl text-yellow-400 mb-2">{pkg.title}</CardTitle>
                <div className="text-5xl font-black text-white mb-2">{pkg.price}</div>
                <div className="text-gray-400">{pkg.duration}</div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-between p-8">
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full mt-auto rounded-lg py-3 text-lg font-semibold ${
                  pkg.popular 
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}>
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included Section (remains the same) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* ... content for this section ... */}
        </div>

        {/* --- THIS ENTIRE DETAILED DESCRIPTION SECTION HAS BEEN REPLACED --- */}
        <div className="bg-gray-800 rounded-xl p-8 md:p-12 mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6 uppercase">
              KIDS SOCCER PARTIES AT ULTIMATE SOCCER ARE AWESOME!
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-center">
              Take a look at the most in demand party package in Western Sydney, we have a number of options to choose from and our party packages take all of the hassle out of party organisation. The best part is, you won’t have to lift a finger all day! Simply relax in the clubhouse, or cheer along from the sidelines!
            </p>

            <ul className="space-y-4 text-gray-300 mb-10">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-semibold text-white">2 hours of fun-packed soccer games and activities</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Watch our party host entertain the party, or join-in and be part of your child’s special day at our <span className="font-semibold text-white">$6 million state-of-the-art purpose built soccer facility</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Optional extra activities available include water fights, Piñatas and extra playing time</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Party decorations, balloons, party invites supplied plus an exclusive area of the clubhouse for your party</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Party hosts and supervisors are highly qualified and have valid <span className="font-semibold text-white">Working with Children certification</span> to ensure you and your kids are in a safe contained environment</span>
              </li>
            </ul>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">2 Hour Kids Parties for All Group Sizes</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our 2-hour kids football party packages provide plenty of action packed fun for everyone! Parties consist of 1 hour of coached play, a 30 minute break for food and, of course, cake, and then another 30 minutes back on the pitch to finish off the day on a high with Soccer Bowling. There are plenty of play styles to choose from to suit the individual birthday girl or boy, including fun mini games, coaching drills, and a mini tournament or a mixture of all three!
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Kids Parties to Suit All Budgets</h3>
                <p className="text-gray-300 leading-relaxed">
                  We can accommodate large or small kids parties. Let us know if you require food or have any special requests. We are committed to making your child’s birthday is special and memorable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Highly Qualified Party Hosts</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ultimate Soccer party hosts know exactly how to make the day as fun and inclusive as possible for the kids, and if your child can’t get enough of the fun and excitement, why not check-out our Holiday Coaching Camps or School-Term Coaching Clinics for those who want to develop their skills on an ongoing basis.
                </p>
              </div>
            </div>

            <div className="text-center bg-gray-900 p-6 rounded-lg mt-10">
              <p className="text-lg font-semibold text-white uppercase">
                Enquire online now about our kids parties, or call our friendly team on <span className="text-yellow-400">02 9725 7020</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}