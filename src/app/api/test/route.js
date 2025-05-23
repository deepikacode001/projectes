import dbConnect from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  console.log("database connected successfully")
  return NextResponse.json({ message: 'MongoDB Connected ✅' });
}
