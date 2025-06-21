/* app/components/PolicyGenerator.tsx */
'use client'
import { useState } from 'react'

export default function PolicyGenerator() {
  const [industry, setIndustry] = useState('')
  const [loading, setLoading] = useState(false)

  const generate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!industry) return
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ industry })
    })
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `fairform-${industry}.pdf`
    a.click()
    setLoading(false)
  }

  return (
    <form onSubmit={generate} className="space-y-4">
      <select
        value={industry}
        onChange={e => setIndustry(e.target.value)}
        className="w-full p-3 rounded-lg border border-neutral-300 text-black"
      >
        <option value="">Select industry</option>
        <option value="construction">Construction</option>
        <option value="trades">Trades</option>
        <option value="retail">Retail</option>
        <option value="health">Health</option>
      </select>

      <button
        type="submit"
        disabled={loading || !industry}
        className="w-full py-3 rounded-lg bg-black text-white hover:bg-neutral-800 transition disabled:opacity-50"
      >
        {loading ? 'Generating…' : 'Generate PDF'}
      </button>
    </form>
  )
}