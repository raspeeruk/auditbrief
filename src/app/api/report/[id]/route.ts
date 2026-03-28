import { NextRequest, NextResponse } from 'next/server'
import { getAuditReport, setAuditReport, nanoid } from '@/lib/session-store'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const report = await getAuditReport(id)

  if (!report) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 })
  }

  return NextResponse.json(report)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const existing = await getAuditReport(id)

  if (!existing) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const updates = await req.json()
  const updated = { ...existing, ...updates }
  await setAuditReport(id, updated, user?.id)

  return NextResponse.json(updated)
}
