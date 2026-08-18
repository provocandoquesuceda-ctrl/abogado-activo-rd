export default function Home() {
  return (
    <main style={{padding: '40px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '36px', fontWeight: 'bold', color: '#1e40af'}}>
        ABOGADO ACTIVO RD ⚖️
      </h1>
      <p style={{marginTop: '8px'}}>MEJI v1.0 - Motor de Expedientes Jurídicos</p>
      
      <div style={{marginTop: '30px', padding: '20px', border: '2px solid #1e40af', borderRadius: '8px'}}>
        <h2 style={{fontWeight: 'bold'}}>Caso Activo: SANTA-ARIAS-2026-001</h2>
        <p><b>Objeto:</b> Referimiento + Ley 5869</p>
        <p><b>Tribunal:</b> 5ta Sala Cámara Civil y Comercial</p>
        <p><b>Audiencia:</b> 04/08/2026</p>
      </div>

      <p style={{marginTop: '20px', color: 'green'}}>✅ Deploy exitoso</p>
    </main>
  )
}
