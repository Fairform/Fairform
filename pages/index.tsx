/* pages/index.tsx */
import Head from 'next/head'
import { motion } from 'framer-motion'
import PolicyGenerator from '@/app/components/PolicyGenerator'
// ...
<PolicyGenerator />


export default function Home() {
  return (
    <>
      <Head>
        <title>Fairform — Automate Compliance</title>
        <meta name="description" content="Audit-grade compliance packs in seconds." />
      </Head>

      <main className="min-h-screen bg-neutral-900 text-white font-sans">
        {/* NAV */}
        <header className="fixed inset-x-0 top-0 z-30 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img src="/fairform-logo.png" alt="Fairform" className="h-7 w-auto" />
              <span className="text-lg font-semibold tracking-tight">FAIRFORM</span>
            </div>
            <nav className="hidden md:flex gap-8 text-sm">
              <a href="#features">Product</a>
              <a href="#industries">Industries</a>
              <a href="#pricing">Pricing</a>
              <a href="#docs">Docs</a>
              <a href="/login">Login</a>
              <a href="#" className="px-4 py-2 bg-white text-black rounded-full">Start Free</a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-light leading-tight"
          >
            Automate Your Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-xl text-neutral-300"
          >
            Audit-ready policy documentation in seconds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 w-full max-w-md"
          >
            <PolicyGenerator />
          </motion.div>
        </section>

        {/* FEATURES */}
        <section id="features" className="border-t border-neutral-800 py-20 px-6 md:px-20">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-medium">Fairform Draft</h3>
              <p className="text-sm text-neutral-400 mt-2">Tailored policies generated instantly</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-medium">Fairform Monitor</h3>
              <p className="text-sm text-neutral-400 mt-2">Regulation tracking & auto-updates</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-medium">Fairform Vault</h3>
              <p className="text-sm text-neutral-400 mt-2">Secure storage with version control</p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-white text-black py-20 px-6 md:px-20">
          <div className="mx-auto max-w-4xl grid gap-10 md:grid-cols-2 text-center">
            <div className="border border-neutral-200 rounded-xl p-10 shadow-sm">
              <h4 className="text-2xl font-semibold mb-4">$199 / month</h4>
              <ul className="space-y-1 text-sm">
                <li>All features</li>
                <li>Continuous updates</li>
                <li>Vault storage</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-xl p-10 shadow-sm">
              <h4 className="text-2xl font-semibold mb-4">$2,388 / year</h4>
              <ul className="space-y-1 text-sm">
                <li>All features</li>
                <li>Continuous updates</li>
                <li>Vault storage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-neutral-900 text-neutral-500 text-xs py-8 px-6 md:px-20 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto flex justify-between">
            <p>© 2025 Fairform Pty Ltd</p>
            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
