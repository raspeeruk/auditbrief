import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get('domain')

  if (!domain) {
    return NextResponse.json({ error: 'domain required' }, { status: 400 })
  }

  const logoUrl = `https://logo.clearbit.com/${domain}`

  try {
    const res = await fetch(logoUrl, { signal: AbortSignal.timeout(5000) })
    if (!res.ok) throw new Error(`Logo fetch failed: ${res.status}`)

    const buffer = await res.arrayBuffer()
    const contentType = res.headers.get('content-type') || 'image/png'
    const base64 = `data:${contentType};base64,${Buffer.from(buffer).toString('base64')}`

    return NextResponse.json({ url: logoUrl, base64, domain })
  } catch {
    return NextResponse.json({ url: null, base64: null, domain })
  }
}
