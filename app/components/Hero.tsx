// app/components/Header.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 h-[90px] bg-[#0f0f10]/90 backdrop-blur-xl border-b border-[#252529]"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo with gradient border */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg">
            <div className="bg-[#0f0f10] rounded-md p-2">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                FAIRFORM
              </span>
            </div>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="ml-12 hidden md:flex space-x-10">
          {['Product', 'Solutions', 'Pricing', 'Resources'].map((item) => (
            <a key={item} className="text-[#a0a0a6] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
              {item}
            </a>
          ))}
        </nav>
        
        {/* Auth buttons */}
        <div className="ml-auto flex space-x-4">
          <button className="px-5 py-2.5 text-[#a0a0a6] hover:text-white">Sign in</button>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-lg hover:shadow-[0_0_20px_rgba(66,153,225,0.5)] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </motion.header>
  );
}
