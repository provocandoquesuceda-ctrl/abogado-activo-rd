import "./globals.css"

export const metadata = {
  title: "ABOGADO ACTIVO RD",
  description: "MEJI v1.0 - Motor de Expedientes Jurídicos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
