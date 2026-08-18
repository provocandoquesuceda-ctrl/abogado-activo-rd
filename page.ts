'use client'
import { useState } from 'react'

export default function Diagnostico() {
  const [hechos, setHechos] = useState('')
  const [resultado, setResultado] = useState('')

  const analizar = () => {
    if(hechos.includes('invasión') || hechos.includes('construyendo')) {
      setResultado('DIAGNÓSTICO: Referimiento Art 109 CPC + Acción Penal Ley 5869. Jurisprudencia: SCJ-PS-23-2128')
    } else {
      setResultado('Describe los hechos para diagnosticar')
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">DIAGNÓSTICO LEGAL</h1>
      <textarea value={hechos} onChange={e => setHechos(e.target.value)} className="w-full h-32 border mt-4 p-2" placeholder="Describe los hechos..."/>
      <button onClick={analizar} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Analizar</button>
      <p className="mt-4 font-bold">{resultado}</p>
    </div>
  )
}
