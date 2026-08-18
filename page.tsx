export default function Home() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">ABOGADO ACTIVO RD</h1>
      <p className="text-gray-600 mt-2">MEJI v1.0 - Motor de Expedientes Jurídicos Inteligentes</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-4 bg-blue-600 text-white rounded-lg">Nuevo Caso</button>
        <button className="p-4 bg-green-600 text-white rounded-lg">Buscar Jurisprudencia</button>
        <button className="p-4 bg-purple-600 text-white rounded-lg">Mis Audiencias</button>
      </div>

      <div className="mt-8 p-4 bg-white rounded-lg shadow">
        <h2 className="font-bold">Caso Activo: SANTA-ARIAS-2026-001</h2>
        <p>Audiencia: 04/08/2026 | Objeto: Referimiento + Ley 5869</p>
      </div>
    </main>
  )
}
