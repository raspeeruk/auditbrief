import type { Metadata } from 'next'
import { Archivo_Narrow, Bebas_Neue, Courier_Prime } from 'next/font/google'
import './globals.css'

const display = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
})

const mono = Courier_Prime({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})

const narrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-narrow',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://auditpdf.com'),
  title: 'AuditPDF.com — Domain available for acquisition',
  description:
    'AuditPDF.com is available for acquisition: a direct .com for audit software, compliance reports and document automation.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AuditPDF.com — Domain available for acquisition',
    description:
      'A direct, memorable .com for audit software, compliance reports and document automation.',
    url: '/',
    siteName: 'AuditPDF.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${narrow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
