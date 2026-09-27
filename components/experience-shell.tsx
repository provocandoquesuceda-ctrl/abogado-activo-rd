export function ExperienceShell() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-600">ABOGADO ACTIVO RD</p>
            <p className="text-xs text-slate-500">MEJI v1.0</p>
          </div>
          <a
            href="#caso-activo"
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Ver caso activo
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            Motor de Expedientes Jurídicos
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Una experiencia jurídica real, desde el expediente hasta la acción.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Interfaz preparada para visualizar casos, hechos, actuaciones y próximos pasos
            sin sustituir la lógica jurídica propia del proyecto.
          </p>
        </section>

        <section id="caso-activo" className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold">Caso activo: SANTA-ARIAS-2026-001</h2>
            <span className="w-fit rounded-full border px-3 py-1 text-xs font-medium">
              ACTIVO
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Objeto</p>
              <p className="mt-1 font-medium">Referimiento + Ley 5869</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Audiencia</p>
              <p className="mt-1 font-medium">04/08/2026</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Estado</p>
              <p className="mt-1 font-medium">Seguimiento requerido</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Diagnóstico legal", "Generación de escritos", "Gestión del caso"].map((item) => (
            <div key={item} className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Módulo preparado para incorporar la lógica específica de MEJI.
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          Interfaz construida reutilizando el patrón web demostrado en law-firm-website.
        </div>
      </footer>
    </div>
  )
}
