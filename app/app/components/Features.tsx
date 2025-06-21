'use client';

import { motion } from 'framer-motion';
import { FEATURES } from '@/lib/constants/features';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compliance Without Complexity
          </h2>
          <p className="text-xl text-[#a0a0a6]">
            AI-powered tools designed for Australian regulatory requirements
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#171719] border border-[#252529] rounded-xl p-8 hover:border-[#3f3f46] transition-all group hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="w-14 h-14 rounded-lg bg-[#252529] flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-900/20 group-hover:to-purple-900/20 transition-all">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#a0a0a6]">{feature.description}</p>
              <div className="mt-6 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats section */}
      <motion.div
        className="max-w-5xl mx-auto mt-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {[
          { stat: '8s', label: 'Policy generation' },
          { stat: '99.4%', label: 'Regulation accuracy' },
          { stat: '0', label: 'Audit failures' },
          { stat: '1,200+', label: 'Businesses' },
        ].map((s, i) => (
          <div
            key={i}
            className="p-6 bg-[#171719]/50 backdrop-blur-sm rounded-xl border border-[#252529]"
          >
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              {s.stat}
            </div>
            <p className="text-[#a0a0a6]">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
