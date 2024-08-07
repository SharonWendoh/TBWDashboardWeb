import { Message } from "@mui/icons-material";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres'

export async function POST(request: Request){
    try {
    const {username, password} = await request.json();
    //Validate email and password
    console.log({username, password})

    const hashedPassword = await hash(password, 10)
    const response = await sql`
        INSERT INTO users (username, password)
        VALUES (${username}, ${hashedPassword})
    `
    } catch (error) {
        console.log({ error })
    }
    return NextResponse.json({Message: 'success'})
}