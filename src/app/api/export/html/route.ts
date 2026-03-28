import { NextRequest, NextResponse } from 'next/server'

export async function POST(_req: NextRequest) {
  return NextResponse.json({ error: 'HTML export not yet implemented — use the interactive chart viewer' }, { status: 501 })
}
