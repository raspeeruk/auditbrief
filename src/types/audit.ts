export type IssueSeverity = 'critical' | 'warning' | 'info' | 'pass'

export interface AuditIssue {
  id: string
  category: 'technical' | 'content' | 'performance' | 'mobile' | 'links' | 'meta'
  title: string
  description: string
  severity: IssueSeverity
  recommendation: string
  affectedPages?: string[]
}

export interface AuditSection {
  id: string
  name: string
  score: number // 0-100
  issues: AuditIssue[]
  summary: string
}

export interface AuditReportDTO {
  url: string
  companyName: string
  auditDate: string
  overallScore: number
  sections: AuditSection[] // technical, content, performance, mobile, links, meta
  executiveSummary: string
  topPriorities: AuditIssue[] // top 5 critical issues
  quickWins: AuditIssue[] // easy fixes with high impact
  paid?: boolean // true after Stripe checkout completes
  agencyBranding?: {
    name: string
    logo?: string
    accentColor?: string
  }
}

export interface AuditSession {
  id: string
  url: string
  status: 'pending' | 'processing' | 'complete' | 'error'
  report?: AuditReportDTO
  createdAt: string
  error?: string
}
