import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data } = await supabase
    .from('branding')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (!data) {
    return NextResponse.json({
      company_name: '',
      phone: '',
      email: '',
      accent_color: '#B8FF00',
      logo_path: null,
    })
  }

  // If there's a logo, generate a signed URL
  let logoUrl = null
  if (data.logo_path) {
    const { data: signed } = await supabase.storage
      .from('logos')
      .createSignedUrl(data.logo_path, 3600)
    logoUrl = signed?.signedUrl || null
  }

  return NextResponse.json({ ...data, logo_url: logoUrl })
}

export async function PUT(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { company_name, phone, email, accent_color } = body

  const row = {
    user_id: user.id,
    company_name: company_name || null,
    phone: phone || null,
    email: email || null,
    accent_color: accent_color || '#B8FF00',
    updated_at: new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from('branding')
    .upsert(row, { onConflict: 'user_id' })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
