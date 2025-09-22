import React from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";

// Temporary utility function until we create the utils file
const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export default function LeagueRules() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
            League <span className="text-yellow-400">Rules</span>
          </h1>
          <p className="text-lg text-gray-300">
            Official competition rules and regulations
          </p>
          <Link to={createPageUrl('BootRoom')} className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            &larr; Back to The Boot Room
          </Link>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">League Rules</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">1.</span>
                <p><strong className="text-white">Team Registration:</strong> All teams must be registered and fees paid before the start of each season. Late registrations may incur additional fees.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">2.</span>
                <p><strong className="text-white">Player Eligibility:</strong> All players must be registered on the team sheet and have valid player insurance. Players cannot represent multiple teams in the same division.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">3.</span>
                <p><strong className="text-white">Match Duration:</strong> All matches are 2 x 20-minute halves with a 2-minute half-time break. The referee's timepiece is the official time.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">4.</span>
                <p><strong className="text-white">Team Size:</strong> 5-a-side matches require minimum 4 players, maximum 5 on field. 7-a-side matches require minimum 5 players, maximum 7 on field.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">5.</span>
                <p><strong className="text-white">Substitutions:</strong> Rolling substitutions are permitted at any time with referee's permission. Players must exit and enter at the designated substitution area.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">6.</span>
                <p><strong className="text-white">Equipment:</strong> All players must wear appropriate football attire. Shin guards are mandatory. Metal studs are prohibited on synthetic surfaces.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">7.</span>
                <p><strong className="text-white">Disciplinary Action:</strong> Yellow and red cards will be issued for misconduct. Accumulation of cards may result in suspension. Serious incidents will be reviewed by the committee.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">8.</span>
                <p><strong className="text-white">Forfeits:</strong> Teams failing to field minimum players forfeit the match (0-3 loss). Teams must notify management 24 hours before match time.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">9.</span>
                <p><strong className="text-white">Points System:</strong> Win = 3 points, Draw = 1 point, Loss = 0 points. Goal difference determines final league position in case of equal points.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">10.</span>
                <p><strong className="text-white">Referee Decisions:</strong> The referee's decision is final on all matters relating to the match. Dissent or abuse towards officials will result in immediate dismissal.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">League Terms and Conditions</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">A.</span>
                <p><strong className="text-white">Liability:</strong> Ultimate Soccer accepts no responsibility for injury or damage to personal property. All players participate at their own risk.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">B.</span>
                <p><strong className="text-white">Weather Conditions:</strong> Matches will proceed in all weather conditions on our covered synthetic pitches. Extreme circumstances may result in postponement.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">C.</span>
                <p><strong className="text-white">Schedule Changes:</strong> Ultimate Soccer reserves the right to reschedule matches due to facility requirements or extraordinary circumstances.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">D.</span>
                <p><strong className="text-white">Refunds:</strong> Registration fees are non-refundable once the season commences. Partial refunds may be considered for extenuating circumstances.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">E.</span>
                <p><strong className="text-white">Conduct:</strong> All players and supporters must maintain appropriate behavior. Unsportsmanlike conduct may result in team suspension from the league.</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-yellow-400 min-w-[2rem]">F.</span>
                <p><strong className="text-white">Disputes:</strong> Any disputes must be lodged in writing within 48 hours of the incident. The committee's decision on all matters is final.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-white">
              For any clarifications regarding these rules, contact us on <span className="text-yellow-400">02 9725 7020</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}