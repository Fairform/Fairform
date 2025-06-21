'use client'
import { useState } from 'react'

export default function PolicyGenerator() {
  const [industry, setIndustry] = useState('')
  const [generating, setGenerating] = useState(false)

  async function generate() {
    if (!industry) return
    setGenerating(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ industry })
    })
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'policy.pdf'
    a.click()
    setGenerating(false)
  }

  return (
    <div className="p-6 border rounded-lg text-center">
      <select value={industry} onChange={e=>setIndustry(e.target.value)}>
        <option value="">Select industry</option>
        <option value="construction">Construction</option>
        <option value="trades">Trades</option>
        <option value="retail">Retail</option>
        <option value="health">Health</option>
      </select>
      <button disabled={generating} onClick={generate}>
        {generating ? 'Generating...' : 'Generate'}
      </button>
    </div>
  )
}
