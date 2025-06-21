// app/pricing/layout.tsx

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-white">
      {children}
    </div>
  );
}
