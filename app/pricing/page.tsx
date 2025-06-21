import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRICING_PLANS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f10] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-[#0f0f10] to-[#151518]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, Fair Pricing
              </h1>
              <p className="text-xl text-[#a0a0a6] max-w-2xl mx-auto mb-10">
                All plans include unlimited policy generations, real-time compliance monitoring, 
                and Australian data sovereignty.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-4 py-2 rounded-full mb-12 border border-[#33333a]"
            >
              <span className="text-blue-400">Save 10%</span>
              <span className="text-white"> with annual billing</span>
            </motion.div>
          </div>
        </section>
        
        {/* Pricing grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PRICING_PLANS.map((plan, index) => (
                <motion.div
                  key={plan.tier}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`bg-[#171719] border rounded-xl p-8 h-full flex flex-col ${
                    plan.featured 
                      ? 'border-purple-500/50 ring-2 ring-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]' 
                      : 'border-[#252529]'
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white inline-block px-4 py-1 rounded-full mb-6 self-start">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.tier}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {!plan.price.toLowerCase().includes('custom') && (
                        <span className="text-[#a0a0a6] ml-2">/month</span>
                      )}
                    </div>
                    <p className="text-[#a0a0a6]">
                      {plan.description || 'Perfect for growing Australian businesses'}
                    </p>
                  </div>
                  
                  <div className="mb-8 flex-1">
                    <h4 className="text-white font-medium mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#a0a0a6]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-medium ${
                      plan.featured
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(129,140,248,0.5)]'
                        : 'bg-[#252529] text-white hover:bg-[#2a2a31]'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
            
            {/* Enterprise contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-16 bg-[#171719] border border-[#252529] rounded-xl p-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Solutions</h3>
                  <p className="text-[#a0a0a6]">
                    Custom compliance packages for multi-state operations, dedicated support, 
                    and API integration.
                  </p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(66,153,225,0.5)] transition-all">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 px-6 bg-[#0a0a0b] border-y border-[#252529]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual billing."
                },
                {
                  question: "Can I cancel anytime?",
                  answer: "Yes, you can cancel your subscription at any time. No hidden fees or penalties."
                },
                {
                  question: "Do you offer discounts for non-profits?",
                  answer: "Yes, we offer 20% discounts for registered Australian non-profit organizations."
                },
                {
                  question: "How often are regulations updated?",
                  answer: "Our system automatically updates daily with the latest regulatory changes across all Australian jurisdictions."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-[#171719] border border-[#252529] rounded-lg p-6"
                >
                  <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                  <p className="text-[#a0a0a6]">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
