'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Construction',
    description: 'Generate Work Health & Safety policies, site procedures, and compliance packs.',
    color: 'bg-yellow-100 text-yellow-800',
  },
  {
    name: 'Trades',
    description: 'Electricians, plumbers, HVAC — instant compliance packs with up-to-date standards.',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Retail',
    description: 'Ensure your store meets national laws for consumer rights and workplace safety.',
    color: 'bg-pink-100 text-pink-800',
  },
  {
    name: 'Healthcare',
    description: 'Policies for providers, clinics, and allied health services tailored to regulation.',
    color: 'bg-green-100 text-green-800',
  },
];

export default function IndustryCards() {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white">
      <h2 className="text-4xl font-semibold mb-12 text-center">Industries We Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry, i) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition ${industry.color}`}
          >
            <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
            <p className="text-sm">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
