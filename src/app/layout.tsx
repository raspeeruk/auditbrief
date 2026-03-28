import type { Metadata } from 'next'
import { Bebas_Neue, Courier_Prime, Archivo_Narrow } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400'],
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '700'],
})

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'AuditBrief — SEO Audits That Look Like Consulting Reports',
  description: 'Enter a URL. AI analyses the site. Get a branded SEO audit PDF your clients will actually read.',
  openGraph: {
    title: 'AuditBrief — SEO Audits That Look Like Consulting Reports',
    description: 'Enter a URL. AI analyses the site. Get a branded SEO audit PDF your clients will actually read.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${courierPrime.variable} ${archivoNarrow.variable}`}>
      <body className="min-h-screen bg-[#F2F2EF] text-[#111110] antialiased">
        {children}
      </body>
    </html>
  )
}
