import Server from 'next/server';

export async function GET() {
  return Server.NextResponse.json({ success: true });
}