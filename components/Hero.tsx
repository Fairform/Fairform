'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <span className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium tracking-wide">
          FAIRFORM
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-6xl font-light leading-tight text-black dark:text-white"
      >
        Automate Your <br className="hidden md:block" /> Compliance
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-xl"
      >
        Generate audit-ready national policy packs tailored to your industry.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10"
      >
        <a
          href="#generator"
          className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Try the Generator →
        </a>
      </motion.div>
    </section>
  );
}
