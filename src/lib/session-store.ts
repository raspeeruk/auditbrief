import { createClient } from '@/lib/supabase/server'
import type { AuditReportDTO } from '@/types'
import { nanoid } from 'nanoid'

// ────── AUDIT REPORTS ──────

export async function getAuditReport(id: string): Promise<AuditReportDTO | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('audit_reports')
    .select('*')
    .eq('id', id)
    .single()

  if (!data) {
    return getDemoAuditReport(id)
  }

  return data.report as AuditReportDTO
}

export async function setAuditReport(id: string, report: AuditReportDTO, userId?: string): Promise<void> {
  if (!userId) {
    await setDemoData(id, report, 'audit_report')
    return
  }

  const supabase = await createClient()
  await supabase.from('audit_reports').upsert({
    id,
    user_id: userId,
    url: report.url,
    report,
    overall_score: report.overallScore,
    updated_at: new Date().toISOString(),
  })
}

export async function getUserAuditReports(userId: string): Promise<Array<{ id: string; url: string; overallScore: number; auditDate: string }>> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('audit_reports')
    .select('id, url, overall_score, updated_at')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })

  if (!data) return []

  return data.map(d => ({
    id: d.id,
    url: d.url,
    overallScore: d.overall_score,
    auditDate: d.updated_at,
  }))
}

// ────── DEMO DATA (anonymous, 2hr TTL) ──────

async function setDemoData(id: string, data: unknown, type: string): Promise<void> {
  const supabase = await createClient()
  await supabase.from('demo_sessions').upsert({
    id,
    data,
    type,
    expires_at: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  })
}

async function getDemoAuditReport(id: string): Promise<AuditReportDTO | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('demo_sessions')
    .select('*')
    .eq('id', id)
    .eq('type', 'audit_report')
    .gt('expires_at', new Date().toISOString())
    .single()

  if (!data) return null
  return data.data as AuditReportDTO
}

export { nanoid }
