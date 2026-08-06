import ConsentScript from "next/script";
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

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${courierPrime.variable} ${archivoNarrow.variable}`}>
      <head>
        <script
          id="roger-group-consent-default"
          dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});" }}
        />
        <ConsentScript
          id="roger-group-consent"
          src="https://rogerson-signups.netlify.app/consent-widget.js"
          strategy="beforeInteractive"
          data-brand="AuditBrief"
          data-domain="auditpdf.com"
          data-analytics="true"
          data-marketing="false"
        />
        {GA4_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_ID}');` }} />
          </>
        )}
      </head>
      <body className="min-h-screen bg-[#F2F2EF] text-[#111110] antialiased">
        {children}
      </body>
    </html>
  )
}
