// app/pricing/page.tsx

export default function PricingPage() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#171719] p-6 rounded-lg border border-[#252529]">
          <h2 className="text-2xl font-semibold mb-2">$199/month</h2>
          <ul className="text-[#a0a0a6] space-y-1 text-sm">
            <li>✔ All AI generation features</li>
            <li>✔ Ongoing regulatory updates</li>
            <li>✔ Document vault & backups</li>
          </ul>
        </div>
        <div className="bg-[#171719] p-6 rounded-lg border border-[#252529]">
          <h2 className="text-2xl font-semibold mb-2">$2,388/year</h2>
          <ul className="text-[#a0a0a6] space-y-1 text-sm">
            <li>✔ Same features as monthly plan</li>
            <li>✔ Save 20% annually</li>
            <li>✔ Priority support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
