import { NextResponse } from 'next/server';

export async function POST(request) {
  //This API route is no longer needed as firebase handles the backend
  return NextResponse.json({ message: 'POST request received' });

}