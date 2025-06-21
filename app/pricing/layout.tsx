// app/pricing/layout.tsx
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#0f0f10] text-white">
      {children}
    </section>
  );
}
