import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import FullScreenMenu from "./components/layout/FullScreenMenu.jsx";
import { createPageUrl } from './utils/index.js';


export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex justify-between items-center">
          <Link to={createPageUrl('Homepage')}>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center font-black text-gray-900 text-2xl">
                US
              </div>
            </div>
          </Link>
          
          {/* Updated Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://ultimatesoccer.spawtz.com/MakeABooking/UltimateSoccer" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2">
                BOOK A PITCH NOW
              </Button>
            </a>
            <a href="https://ultimatesoccer.spawtz.com/registration/leagues" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2">
                JOIN A LEAGUE NOW
              </Button>
            </a>
            <Link to={createPageUrl("BootRoom")}>
              <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2">
                THE BOOT ROOM
              </Button>
            </Link>
          </div>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-8 h-8 text-white" />
          </Button>
        </div>
      </header>

      {/* Updated Mobile Floating Buttons */}
      <div className="fixed top-20 right-4 z-40 md:hidden flex flex-col gap-2">
        <a href="https://ultimatesoccer.spawtz.com/MakeABooking/UltimateSoccer" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-3 py-2">
            BOOK A PITCH NOW
          </Button>
        </a>
        <a href="https://ultimatesoccer.spawtz.com/registration/leagues" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3 py-2">
            JOIN A LEAGUE NOW
          </Button>
        </a>
        <Link to={createPageUrl("BootRoom")}>
          <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-xs px-3 py-2">
            BOOT ROOM
          </Button>
        </Link>
      </div>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="relative">
        {children}
      </main>

      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6 gap-6">
            <Link to={createPageUrl("About")} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              ABOUT US
            </Link>
            <Link to={createPageUrl("Terms")} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              TERMS
            </Link>
            <Link to={createPageUrl("FAQ")} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              FAQ
            </Link>
            <Link to={createPageUrl("Privacy")} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              PRIVACY
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Ultimate Football Pty Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}