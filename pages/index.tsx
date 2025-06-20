import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>FAIRFORM – Compliance Automated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center px-16 py-6 bg-black text-white">
        <div className="font-bold text-xl">FAIRFORM</div>
        <nav className="space-x-8 text-sm">
          <a href="#" className="hover:underline">Product</a>
          <a href="#" className="hover:underline">Industries</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Start Free</a>
        </nav>
      </header>

      <main>
        <section className="text-center py-32">
          <h1 className="text-6xl font-semibold leading-tight">Compliance.<br />Automated.</h1>
          <p className="text-gray-400 text-xl mt-6">Generate audit-grade policy packs in seconds.</p>
          <button className="mt-10 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition">
            Try the Generator →
          </button>
        </section>

        <section className="flex justify-center gap-20 py-20 text-center">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold">FAIRFORM DRAFT</h3>
            <p className="text-sm text-gray-400 mt-2">AI-generated tailored compliance documentation</p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold">FAIRFORM MONITOR</h3>
            <p className="text-sm text-gray-400 mt-2">Live regulatory tracking with auto-regeneration</p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold">FAIRFORM VAULT</h3>
            <p className="text-sm text-gray-400 mt-2">Secure document storage + version control</p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-center gap-20 py-20 px-10">
          <img src="https://via.placeholder.com/400x240?text=Incident+Management+Policy" alt="Generated Document" />
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-4">NDIS Providers</h2>
            <p className="text-gray-300 text-base mb-2">
              NDIS-compliant documentation built from the Commission’s standards.
            </p>
            <p className="text-gray-300 text-base">
              Includes Incident Reporting, Participant Rights, Complaints Handling.
            </p>
          </div>
        </section>

        <section className="bg-white text-black py-20 flex justify-center gap-32">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">$199/month</h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li>All features</li>
              <li>Regeneration updates</li>
              <li>Document vault</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">$2,388/year</h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li>All features</li>
              <li>Regeneration updates</li>
              <li>Document vault</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-black text-center py-6 text-sm text-gray-500">
        © 2025 FAIRFORM Pty Ltd | Privacy | Security | Terms
      </footer>
    </>
  )
}
