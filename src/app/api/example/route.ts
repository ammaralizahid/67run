import { NextResponse } from 'next/server';

/**
 * Example API Route
 * 
 * This is a template for creating API routes in the App Router.
 * Replace this with your actual API endpoints.
 */
export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from API route',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return NextResponse.json({ 
    message: 'Data received',
    data: body,
  });
}
