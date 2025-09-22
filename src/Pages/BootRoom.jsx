import React from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import { 
  Trophy, 
  Calendar, 
  FileText, 
  Users, 
  Video, 
  Award, 
  ShoppingBag, 
  UserPlus,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

const bootRoomItems = [
  {
    icon: Trophy,
    title: "LEAGUE TABLES",
    description: "Current standings and team statistics",
    page: "LeagueTables",
    color: "bg-yellow-500",
    available: true
  },
  {
    icon: Calendar,
    title: "RESULTS & FIXTURES",
    description: "Match schedules and latest results",
    page: "Fixtures",
    color: "bg-blue-500",
    available: true
  },
  {
    icon: FileText,
    title: "LEAGUE RULES",
    description: "Competition rules and regulations",
    page: "LeagueRules",
    color: "bg-green-500",
    available: true
  },
  {
    icon: Users,
    title: "BOSMAN BOARD",
    description: "Find players or teams",
    page: "BosmanBoard",
    color: "bg-purple-500",
    available: true
  },
  {
    icon: Video,
    title: "MATCH HIGHLIGHTS",
    description: "Best moments from recent games",
    page: "MatchHighlights",
    color: "bg-red-500",
    available: false
  },
  {
    icon: Award,
    title: "UPCOMING TOURNAMENTS",
    description: "Special competitions and events",
    page: "Tournaments",
    color: "bg-orange-500",
    available: true
  },
  {
    icon: ShoppingBag,
    title: "KIT STORE",
    description: "Team jerseys and equipment",
    page: "KitStore",
    color: "bg-indigo-500",
    available: false
  },
  {
    icon: UserPlus,
    title: "REGISTER A LEAGUE TEAM",
    description: "Sign up your team for competition",
    page: "RegisterTeam",
    color: "bg-pink-500",
    available: false
  }
];

export default function BootRoom() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            The <span className="text-yellow-400">Boot Room</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            THE ULTIMATE TEAM MANAGEMENT TOOL! Access league tables, fixtures, and player transfers.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bootRoomItems.map((item, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/50 border-gray-700 backdrop-blur-sm ${item.available ? 'hover:border-yellow-400' : 'opacity-60'}`}>
              {item.available ? (
                <Link to={createPageUrl(item.page)} className="block h-full p-6 text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors uppercase tracking-wider">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-gray-400 mt-2 mb-4 min-h-[40px]">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium mr-2">View Here</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
              ) : (
                <div className="h-full p-6 text-center">
                    <div className={`w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <item.icon className="w-8 h-8 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-500 uppercase tracking-wider">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-2 mb-4 min-h-[40px]">
                      {item.description}
                    </p>
                    <div className="text-center">
                      <div className="bg-yellow-400/20 text-yellow-400 text-xs font-semibold inline-block px-3 py-1 rounded-full">
                        Coming Soon!
                      </div>
                    </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}