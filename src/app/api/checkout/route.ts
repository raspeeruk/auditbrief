import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const { reportId } = await req.json()
  const origin = req.headers.get('origin') || 'https://auditpdf.com'

  // Get user if authenticated (optional — guests can still pay)
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const priceId = process.env.STRIPE_PRICE_ID
  if (!priceId) {
    return NextResponse.json({ error: 'Stripe price not configured' }, { status: 500 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    success_url: `${origin}/app/success?session_id={CHECKOUT_SESSION_ID}&report_id=${reportId}`,
    cancel_url: `${origin}/app/report/${reportId}`,
    metadata: {
      reportId,
      userId: user?.id || '',
    },
  })

  return NextResponse.json({ url: session.url })
}
