import { NextResponse } from 'next/server';
import { minikitConfig } from '@/minikit.config';

/**
 * Farcaster manifest endpoint
 * Required by Base mini-apps to be hosted at /.well-known/farcaster.json
 * 
 * This endpoint returns the app manifest including account association
 * credentials and all app metadata for Base discovery.
 */
export async function GET() {
  const manifest = {
    accountAssociation: minikitConfig.accountAssociation,
    miniapp: minikitConfig.miniapp,
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
