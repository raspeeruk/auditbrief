import { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'
import { runAuditPipeline } from '@/lib/engine/audit-pipeline'
import { setAuditReport } from '@/lib/session-store'
import { createClient } from '@/lib/supabase/server'

// Allow up to 60s for the Claude API call + site crawl
export const maxDuration = 60

export async function POST(req: NextRequest) {
  try {
    const { url, agencyName, agencyAccentColor } = await req.json() as {
      url: string
      agencyName?: string
      agencyAccentColor?: string
    }

    if (!url) {
      return new Response(
        JSON.stringify({ error: 'url is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get current user (optional — demo mode if no auth)
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const reportId = nanoid(12)
    const encoder = new TextEncoder()

    const agencyBranding = agencyName
      ? { name: agencyName, accentColor: agencyAccentColor || '#B8FF00' }
      : undefined

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
        }

        try {
          const report = await runAuditPipeline(
            url,
            agencyBranding,
            (progress) => {
              send({ type: 'progress', ...progress })
            }
          )

          await setAuditReport(reportId, report, user?.id)

          send({ type: 'complete', reportId })
        } catch (error) {
          const msg = error instanceof Error ? error.message : 'Audit failed'
          console.error('[audit-pipeline]', error)
          send({ type: 'error', error: msg })
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Audit failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
