import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
// import {connectionURL} from '../lib/db'

export async function GET() {
   await mongoose.connect(process.env.MONGO_URL)  
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`database connected ${process.env.MONGO_URL}`)
  } catch (error) {
    console.log(`database not connected ${process.env.MONGO_URL}`)
  }

  return NextResponse.json({ success: true });
}