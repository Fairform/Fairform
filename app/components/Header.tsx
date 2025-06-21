import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 h-[90px] bg-[#0f0f10]/90 backdrop-blur-xl border-b border-[#252529]"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        {/* Logo with gradient border */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg">
            <div className="bg-[#0f0f10] rounded-md p-2">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                FAIRFORM
              </span>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="ml-12 hidden md:flex space-x-10">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[#a0a0a6] hover:text-white transition-all duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        
        {/* Desktop Auth buttons */}
        <div className="ml-auto hidden md:flex space-x-4">
          <motion.button 
            className="px-5 py-2.5 text-[#a0a0a6] hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign in
          </motion.button>
          
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-lg hover:shadow-[0_0_20px_rgba(66,153,225,0.5)] transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(66, 153, 225, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="ml-auto md:hidden text-[#a0a0a6]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f0f10] border-t border-[#252529]"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#a0a0a6] hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <button className="w-full text-left py-2.5 text-[#a0a0a6] hover:text-white">
                  Sign in
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
