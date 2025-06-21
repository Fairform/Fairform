'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/fairform-logo.png"
            alt="Fairform Logo"
            className="h-6 w-auto dark:brightness-200 brightness-100"
          />
          <span className="text-lg font-semibold text-black dark:text-white tracking-wide">
            FAIRFORM
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-black dark:text-white">
          <Link href="#product">Product</Link>
          <Link href="#industries">Industries</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#docs">Docs</Link>
          <Link href="#login">Login</Link>
          <Link
            href="#generator"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            Start Free
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="h-6 w-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 text-sm font-medium text-black dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Link href="#product" onClick={() => setMenuOpen(false)}>Product</Link>
            <Link href="#industries" onClick={() => setMenuOpen(false)}>Industries</Link>
            <Link href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="#docs" onClick={() => setMenuOpen(false)}>Docs</Link>
            <Link href="#login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link
              href="#generator"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full"
            >
              Start Free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
