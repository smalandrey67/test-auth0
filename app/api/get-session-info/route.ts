import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';

// eslint-disable-next-line import/prefer-default-export
export const GET = async () => {
  const sessionInfo = await getSession();

  return NextResponse.json(sessionInfo);
};
