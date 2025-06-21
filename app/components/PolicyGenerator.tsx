'use client';

import { useState } from 'react';

export default function PolicyGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry: 'construction' })
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'fairform-policy.pdf';
      a.click();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-50 rounded-2xl p-8 shadow-sm">
      <form onSubmit={handleGenerate} className="space-y-4">
        <select className="w-full p-3 rounded-lg border border-gray-200 bg-white">
          <option value="">Select your industry</option>
          <option value="construction">Construction</option>
          <option value="trades">Electrical & Plumbing</option>
          <option value="retail">Retail</option>
          <option value="health">Healthcare</option>
        </select>

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition disabled:opacity-50"
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate National Policy'}
        </button>
      </form>
    </div>
  );
}
