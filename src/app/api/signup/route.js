import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Register from "../../../lib/model/register";
export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();
    console.log("Received data:", { name, email, password });

    // Check if user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new Register({ name, email, password : hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ message: "Registration failed", error: error.message }, { status: 500 });
  }
}
