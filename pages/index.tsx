import Head from 'next/head';
import PolicyGenerator from '@/app/components/PolicyGenerator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairform | Automate Your Compliance</title>
        <meta name="description" content="Generate fully compliant policy packs and documentation tailored to your industry with Fairform." />
        <meta name="keywords" content="compliance, policy templates, NDIS, aged care, compliance docs, Fairform, business regulation" />
        <meta name="author" content="Fairform" />
        <meta property="og:title" content="Fairform | Automate Your Compliance" />
        <meta property="og:description" content="Generate policy and compliance packs instantly for regulated industries using Fairform." />
        <meta property="og:image" content="/fairform-og-image.png" />
        <meta property="og:url" content="https://fairform.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-white text-black min-h-screen font-sans">
        {/* NAVIGATION */}
        <header className="flex justify-between items-center px-6 md:px-20 py-6">
          <div className="flex items-center space-x-3">
            <img
              src="/fairform-logo.png"
              alt="Fairform Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold">FAIRFORM</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#">Product</a>
            <a href="#">Industries</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
            <a href="#">Login</a>
            <a href="#" className="px-4 py-2 bg-black text-white rounded-full">Start Free</a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="text-center px-6 md:px-20 py-16">
          <h1 className="text-5xl md:text-6xl font-light leading-tight">Compliance.<br />Automated.</h1>
          <p className="mt-6 text-lg text-gray-700">Generate audit-grade policy packs in seconds.</p>
          <PolicyGenerator />
        </section>

        {/* PRODUCT FEATURES */}
        <section className="flex flex-col md:flex-row justify-center text-center gap-10 px-6 md:px-20 py-12 border-t border-gray-200">
          <div>
            <div className="text-3xl mb-2">📄</div>
            <h3 className="font-semibold">FAIRFORM DRAFT</h3>
            <p className="text-gray-600 text-sm">Tailored compliance documentation, instantly generated</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-semibold">FAIRFORM MONITOR</h3>
            <p className="text-gray-600 text-sm">Live regulation tracking with automatic regeneration</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🔐</div>
            <h3 className="font-semibold">FAIRFORM VAULT</h3>
            <p className="text-gray-600 text-sm">Secure policy storage & version control</p>
          </div>
        </section>

        {/* INDUSTRY HIGHLIGHT SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12">
          <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2 shadow-sm">
            <p className="text-sm text-gray-500">Sample Output</p>
            <div className="mt-4 bg-white p-4 rounded border border-gray-200">
              <h4 className="text-lg font-semibold">Incident Management Policy</h4>
              <p className="text-gray-500 text-sm mt-2">Policy auto-generated based on NDIS standards and best practice compliance structure.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">NDIS Providers</h2>
            <p className="text-gray-700 text-sm mb-2">
              NDIS‑compliant documentation aligned with Commission regulations
            </p>
            <ul className="text-gray-600 text-sm list-disc list-inside">
              <li>Incident Reporting</li>
              <li>Participant Rights</li>
              <li>Complaints Handling</li>
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section className="bg-gray-50 text-black py-16 px-6 md:px-20 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-center gap-16 text-center">
            <div>
              <h3 className="text-3xl font-semibold">$199/month</h3>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>• All Fairform features</li>
                <li>• Regeneration updates</li>
                <li>• Vault storage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">$2,388/year</h3>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>• All Fairform features</li>
                <li>• Regeneration updates</li>
                <li>• Vault storage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white text-gray-500 text-xs py-8 px-6 md:px-20 flex justify-between border-t border-gray-200">
          <p>© 2025 FAIRFORM Pty Ltd</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
          </div>
        </footer>
      </main>
    </>
  );
}
