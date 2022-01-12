import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hostname = req.headers.get('host');
  const currentHost = process.env.PLATFORM === 'local' ? process.env.DEFAULT_COUNTRY_URL : hostname;

  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (!pathname.includes('.') && !pathname.startsWith('/api')) {
    // rewrite to the current hostname under the pages/sites folder
    return NextResponse.rewrite(`/_sites/${currentHost}${pathname}`);
  }
}
