import dbConnect from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    console.log("database connected successfully");
    return NextResponse.json({ message: 'MongoDB Connected ✅' });
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json({ message: 'MongoDB Connection Failed ❌', error: error.message }, { status: 500 });
  }
}