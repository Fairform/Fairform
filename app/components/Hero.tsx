'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/constants';

export default function Hero() {
  const [industry, setIndustry] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateDemo = async () => {
    if (!industry) {
      setError('Please select an industry');
      return;
    }

    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fairform-${industry}-policy.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      
    } catch (err) {
      setError('Failed to generate policy. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative pt-28 pb-40">
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-900/20 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compliance Automation</span>
          </h1>
          <p className="text-xl text-[#a0a0a6] mb-10">
            Generate audit-ready policies for Australian businesses in seconds. 
            Stay compliant without lawyers.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="email" 
              placeholder="Your work email" 
              className="flex-1 bg-[#252529] border border-[#3f3f46] rounded-lg px-5 py-3 text-white placeholder-[#6b6b7b]"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(66,153,225,0.5)] transition-all">
              Get Started
            </button>
          </div>
          
          <div className="mt-10 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-[#3f3f46] border-2 border-[#0f0f10]"></div>
              ))}
            </div>
            <p className="text-[#a0a0a6]">
              <span className="text-white font-medium">1,200+</span> Australian businesses
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#171719] border border-[#252529] rounded-xl p-1"
        >
          <div className="bg-[#252529] p-5 rounded-lg">
            <h3 className="text-white font-medium mb-4">Try Fairform</h3>
            <select 
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
                setError(null);
              }}
              className="w-full bg-[#0f0f10] border border-[#3f3f46] rounded-lg px-4 py-3 mb-4 text-white"
            >
              <option value="">Select your industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind.value} value={ind.value}>{ind.label}</option>
              ))}
            </select>
            
            <button 
              onClick={generateDemo}
              disabled={isGenerating}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${
                isGenerating 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_15px_rgba(66,153,225,0.4)]'
              }`}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Policy...
                </>
              ) : 'Generate Demo Policy'}
            </button>
            
            {error && (
              <div className="mt-4 bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                <p className="text-red-400 text-sm flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {error}
                </p>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-sm text-[#a0a0a6]">
                <span className="text-white font-medium">No credit card required</span> - download immediately
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
