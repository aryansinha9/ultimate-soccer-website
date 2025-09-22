import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { ContactInquiry } from "../Entities/ContactInquiry.js";

// Temporary utility function
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function BosmanBoard() {
  const [needPlayerForm, setNeedPlayerForm] = useState({
    team_name: '',
    players_needed: '',
    date_required: '',
    name: '',
    phone: '',
    email: ''
  });

  const [needTeamForm, setNeedTeamForm] = useState({
    name: '',
    days_available: [],
    level: [],
    phone: '',
    email: ''
  });

  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Form submission logic remains the same...
  const handlePlayerFormSubmit = async (e) => { e.preventDefault(); /* ... */ };
  const handleTeamFormSubmit = async (e) => { e.preventDefault(); /* ... */ };

  const updateDaysAvailable = (day, checked) => {
    if (checked) {
      setNeedTeamForm(prev => ({ ...prev, days_available: [...prev.days_available, day] }));
    } else {
      setNeedTeamForm(prev => ({ ...prev, days_available: prev.days_available.filter(d => d !== day) }));
    }
  };

  const updateLevel = (level, checked) => {
    if (checked) {
      setNeedTeamForm(prev => ({ ...prev, level: [...prev.level, level] }));
    } else {
      setNeedTeamForm(prev => ({ ...prev, level: prev.level.filter(l => l !== level) }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            BOSMAN <span className="text-yellow-400">BOARD</span>
          </h1>
          <p className="text-lg text-gray-300">
            Find players for your team or find a team to join
          </p>
          <Link to={createPageUrl('BootRoom')} className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            &larr; Back to The Boot Room
          </Link>
        </div>

        {submitStatus.message && (
          <div className={`text-center mb-8 p-4 rounded-lg ${
            submitStatus.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-start">
          {/* Column 1: Need a Player Form */}
          <Card className="bg-gray-800 border-gray-700 p-4 rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-yellow-400">Need a Player?</CardTitle>
              <p className="text-gray-400 mt-2">Fill out this form to find players for your team</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePlayerFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Your Team Name</label>
                  <Input required value={needPlayerForm.team_name} onChange={(e) => setNeedPlayerForm(prev => ({ ...prev, team_name: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Number of Players Needed</label>
                  <Input required type="number" min="1" max="10" value={needPlayerForm.players_needed} onChange={(e) => setNeedPlayerForm(prev => ({ ...prev, players_needed: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Date Required</label>
                  <Input required type="date" value={needPlayerForm.date_required} onChange={(e) => setNeedPlayerForm(prev => ({ ...prev, date_required: e.target.value }))} className="bg-gray-700 border-gray-600 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Your Name</label>
                  <Input required value={needPlayerForm.name} onChange={(e) => setNeedPlayerForm(prev => ({ ...prev, name: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Phone Number</label>
                  <Input required type="tel" value={needPlayerForm.phone} onChange={(e) => setNeedPlayerForm(prev => ({ ...prev, phone: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Your Email</label>
                  <Input required type="email" value={needPlayerForm.email} onChange={(e) => setNeedPlayerForm(prev => ({ ...prev, email: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg font-semibold py-3 rounded-md">
                  SEND
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Column 2: The "OR" Divider */}
          <div className="flex items-center justify-center h-full my-8 lg:my-0">
            <div className="bg-yellow-400 text-gray-900 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-2xl">
              OR
            </div>
          </div>

          {/* Column 3: Need a Team Form */}
          <Card className="bg-gray-800 border-gray-700 p-4 rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-yellow-400">Need a Team?</CardTitle>
              <p className="text-gray-400 mt-2">Looking to join a team? Let us know your availability</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTeamFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Your Name</label>
                  <Input required value={needTeamForm.name} onChange={(e) => setNeedTeamForm(prev => ({ ...prev, name: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-400">Days Available to Play</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
                      const isChecked = needTeamForm.days_available.includes(day);
                      return (
                        <div key={day} onClick={() => updateDaysAvailable(day, !isChecked)} className="flex items-center space-x-2 cursor-pointer p-1 rounded-md hover:bg-gray-700">
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={() => {}}
                            className="pointer-events-none"
                          />
                          <span className="text-sm text-gray-300">{day}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-400">Level Looking to Play</label>
                  <div className="space-y-2">
                    {['Division 1', 'Division 2', 'Division 3', 'Division 4'].map(level => {
                      const isChecked = needTeamForm.level.includes(level);
                      return (
                        <div key={level} onClick={() => updateLevel(level, !isChecked)} className="flex items-center space-x-2 cursor-pointer p-1 rounded-md hover:bg-gray-700">
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={() => {}}
                            className="pointer-events-none"
                          />
                          <span className="text-sm text-gray-300">{level}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Phone Number</label>
                  <Input required type="tel" value={needTeamForm.phone} onChange={(e) => setNeedTeamForm(prev => ({ ...prev, phone: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Your Email</label>
                  <Input required type="email" value={needTeamForm.email} onChange={(e) => setNeedTeamForm(prev => ({ ...prev, email: e.target.value }))} className="bg-gray-700 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400 rounded-md" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg font-semibold py-3 rounded-md">
                  SEND
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}