import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Giora Friede",
    title: "Executive Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Giora has over 25 years experience building, managing and selling successful businesses in the USA and Australia. Giora provides invaluable strategic direction, experience and network influence. Plays Centre Forward. Supports Man United."
  },
  {
    id: 2,
    name: "Emir Mani",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Emir brings extensive experience in operations and strategic management to Ultimate Soccer. His passion for football and business excellence drives the company's vision forward."
  },
  {
    id: 3,
    name: "Lee McCann",
    title: "Facility Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Lee ensures our facility operates at the highest standards, managing day-to-day operations and maintaining the premium experience our customers expect."
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b2916b?auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Sarah oversees all operational aspects of Ultimate Soccer, ensuring smooth coordination between leagues, bookings, and customer service."
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Head Coach",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Michael leads our coaching programs and development initiatives, bringing professional playing experience and coaching qualifications to develop players of all levels."
  },
  {
    id: 6,
    name: "Emma Thompson",
    title: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Emma manages all marketing initiatives and community engagement, helping to grow the Ultimate Soccer brand across Western Sydney."
  }
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, teamMembers.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, teamMembers.length - 4)) % Math.max(1, teamMembers.length - 4));
  };

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
              About <span className="text-yellow-400">Ultimate Soccer</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200">
              The heart of 5-a-side football in Western Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* Background & Mission */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">
              About <span className="text-yellow-400">Us</span>
            </h2>
            
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Background</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Ultimate Soccer is a state-of-the-art $4m five-a-side soccer facility that was launched in July 2015 to a rapturous welcome by Western Sydney's passionate soccer community. Located within the grounds of Fairfield High School, Ultimate Soccer is part of a private public partnership with Fairfield High School and the Department of Education. The school has free access to the facility during school hours while Ultimate Soccer leases the land and is open to the public during evenings and weekends. With a mix of passion, experience and drive, the Ultimate Soccer team are committed to bringing together the local community to be active and enjoy football by delivering the ultimate soccer experience. We offer a safe environment that promotes fun and fitness to social participants, and skill development, discipline and teamwork to those that take their football a little more serious. Ultimate Soccer has something for everyone, so come down and give us a try!
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center uppercase">
            Meet The <span className="text-yellow-400">Ultimate Soccer</span> Team
          </h2>

          {/* Team Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-0 z-10 bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-400"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="overflow-hidden mx-16">
                <div 
                  className="flex transition-transform duration-300 ease-in-out gap-6"
                  style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
                >
                  {teamMembers.map((member) => (
                    <Card key={member.id} className="flex-shrink-0 w-64 bg-gray-700 border-gray-600 cursor-pointer hover:bg-gray-600 transition-colors">
                      <CardContent className="p-6 text-center">
                        <div 
                          className="w-32 h-32 mx-auto mb-4 rounded-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${member.image})` }}
                        />
                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-yellow-400 mb-4">{member.title}</p>
                        <Button
                          onClick={() => setSelectedMember(member)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                        >
                          View Bio
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-0 z-10 bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-400"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-8 relative">
            <Button
              onClick={() => setSelectedMember(null)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="text-center">
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedMember.image})` }}
              />
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
              <p className="text-yellow-400 mb-6">{selectedMember.title}</p>
              <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}