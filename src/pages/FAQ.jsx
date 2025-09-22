import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "WHAT IS ULTIMATE SOCCER?",
    answer: "Ultimate Soccer is a state of the art 5-a-side football venue which boasts 8 FIFA grade artificial pitches with drainage cell technology, stadium quality floodlights and \"Cage Design\" rebound boards with roof netting. Our facility includes a modern clubhouse with changing rooms, showers, and spectator areas."
  },
  {
    question: "WHAT IS THE ULTIMATE SOCCER ADDRESS?",
    answer: "Fairfield High School, 405 the Horsley Drive, Fairfield, NSW, 2165"
  },
  {
    question: "WHAT ARE THE OPENING HOURS?",
    answer: "Ultimate Soccer is open 7 days a week from 6AM to 11PM daily. Our facility operates during evenings and weekends when the school is not using it."
  },
  {
    question: "HOW MUCH DOES IT COST TO HIRE A PITCH?",
    answer: "5-a-side pitch hire costs $120 for 1 hour or $220 for 2 hours. 7-a-side pitch hire costs $150 for 1 hour or $280 for 2 hours. All prices are inclusive and equipment is provided."
  },
  {
    question: "HOW DO I MAKE A BOOKING?",
    answer: "You can book online through our website booking system or call us on 02 9725 7020. All bookings must be paid in advance unless authorized by the facility manager."
  },
  {
    question: "WHAT IS INCLUDED IN THE PITCH HIRE?",
    answer: "All pitch hires include use of our FIFA-grade synthetic pitch, professional lighting, quality soccer ball, team bibs, and access to changing rooms and showers."
  },
  {
    question: "CAN I CANCEL MY BOOKING?",
    answer: "Cancellations must be made at least 48 hours before your scheduled booking time to qualify for rescheduling. Late cancellations (within 48 hours) will be charged the full amount unless we can resell the booking."
  },
  {
    question: "DO YOU OFFER LEAGUES AND COMPETITIONS?",
    answer: "Yes! We run competitive 5-a-side and 7-a-side leagues 7 days a week with multiple divisions. League fees are $100 per team per week for 5-a-side. Check our Boot Room for current league tables and fixtures."
  },
  {
    question: "DO YOU PROVIDE REFEREES?",
    answer: "Yes, all league matches are officiated by fully qualified referees. For casual bookings, referees can be arranged upon request for an additional fee."
  },
  {
    question: "WHAT ABOUT KIDS PARTIES?",
    answer: "We offer amazing kids soccer party packages starting from $299. Each package includes exclusive pitch hire, qualified party coach, games and activities, decorations, and party invitations."
  },
  {
    question: "IS THERE PARKING AVAILABLE?",
    answer: "Yes, we provide free parking on-site for all players and spectators."
  },
  {
    question: "WHAT SHOULD I BRING?",
    answer: "Just bring yourself, your team, and appropriate footwear (boots or runners). We provide the ball, bibs, and all necessary equipment."
  },
  {
    question: "ARE THERE AGE RESTRICTIONS?",
    answer: "Our facility welcomes players of all ages. Children under 16 must be supervised by an adult at all times. We have specific junior leagues and programs available."
  },
  {
    question: "DO YOU OFFER COACHING PROGRAMS?",
    answer: "Yes, we offer coaching programs for all ages and skill levels, including kids development (5-12 years), junior skills (13-17 years), and adult training (18+ years)."
  },
  {
    question: "WHAT DO I DO IF MY QUESTION WASN'T ANSWERED?",
    answer: "Visit the ENQUIRE now page of the website and send us a direct email with your questions which we can answer straight away or give us a call on 0297257020."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200">
              All your questions, answered.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                >
                  <span className="font-bold text-lg text-yellow-400 uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-yellow-400 transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concluding Information */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you're looking to hire a 5-a-side pitch for regular team training, or organise a kids soccer party, you likely have a few questions about Ultimate Soccer and how it works. Our FAQ section contains comprehensive information about Ultimate Soccer as a company, our state-of-the-art 5-a-side football facilities in Western Sydney, kids party packages, corporate events, 5-a-side leagues, bubble soccer, kids soccer camps, or our one-off football tournaments. You'll also find more info on insurance, the rules of 5-a-side football (also sometimes known as Futsal) our location in Western Sydney, and our free parking and changing facilities. Everything you need to know to get started with playing 5-a-side at Ultimate Soccer! Still have further questions? Our friendly and knowledgeable team can answer them for you. Enquire online now, or call us on 02 9725 7020.
          </p>
        </div>
      </section>
    </div>
  );
}