'use client'

import { useState } from 'react'

export default function PolicyGenerator() {
  const [industry, setIndustry] = useState('construction')
  const [loading, setLoading] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  const generate = async () => {
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify({ industry }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      const blob = await res.blob()
      setPdfUrl(URL.createObjectURL(blob))
    }
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Generate Compliance Policy</h2>
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="mb-4 p-2 rounded bg-gray-900 border border-gray-700 text-white"
      >
        <option value="construction">Construction</option>
        <option value="healthcare">Healthcare</option>
        <option value="retail">Retail</option>
        <option value="trades">Trades</option>
      </select>
      <button
        onClick={generate}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? 'Generating...' : 'Generate PDF'}
      </button>

      {pdfUrl && (
        <div className="mt-4">
          <a href={pdfUrl} download="Fairform-Compliance-Guide.pdf" className="text-blue-400 underline">
            Download PDF
          </a>
        </div>
      )}
    </div>
  )
}