import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { X, Mail, Phone } from 'lucide-react';
import { createPageUrl } from '../../utils/index.js'; // Using the central utility

// --- THIS IS THE UPDATED ARRAY ---
// The "5-A-Side Comps" item has been removed.
const menuItems = [
  { title: 'Book a Pitch', url: createPageUrl('BookPitchInfo') },
  { title: 'Join a League', url: createPageUrl('JoinLeague') },
  { title: 'Coaching', url: createPageUrl('Coaching') },
  { title: 'Kids Parties', url: createPageUrl('KidsParties') },
  { title: 'Tournaments', url: createPageUrl('Tournaments') },
];

const menuVariants = {
  hidden: { opacity: 0, x: '100vw' },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.05 } },
  exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut', duration: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FullScreenMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex flex-col p-8"
        >
          <div className="flex justify-between items-center mb-16">
            <Link to={createPageUrl('Homepage')} onClick={onClose}>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center font-bold text-gray-900 text-2xl">
                  US
                </div>
              </div>
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-yellow-400">
              <X className="w-8 h-8" />
            </Button>
          </div>

          <div className="flex-grow flex flex-col justify-center items-end text-right">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Link
                    to={item.url}
                    onClick={onClose}
                    className="text-3xl md:text-4xl font-bold text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="mt-8">
                <a 
                  href="https://ultimatesoccer.spawtz.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="text-2xl md:text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Quick Register →
                </a>
              </motion.div>
            </nav>
            
            <motion.div variants={itemVariants} className="mt-16">
              <div className="text-right mb-4">
                <p className="text-gray-400 text-sm mb-2">NEED MORE INFO?</p>
              </div>
              <div className="flex justify-end gap-2">
                <a href="mailto:fairfield@ultimatesoccer.com.au">
                  <Button className="bg-yellow-400 text-gray-900 font-bold hover:bg-white hover:text-yellow-400 rounded-lg transition-colors duration-300 flex items-center px-4 py-2">
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="text-base">Email Us</span>
                  </Button>
                </a>
                <a href="tel:0297257020">
                  <Button className="bg-yellow-400 text-gray-900 font-bold hover:bg-white hover:text-yellow-400 rounded-lg transition-colors duration-300 flex items-center px-4 py-2">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="text-base">Call Us</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}