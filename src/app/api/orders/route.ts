import { NextRequest } from "next/server";

const BASE_URL = process.env.BASE_URL
export async function GET(request:NextRequest){
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '0'; // Default to 0 if not provided
    const limit = searchParams.get('limit') || '10'; // Default to 10 if not provided


    const response = await fetch(`${BASE_URL}/orders?page=${page}&limit=${limit}`)

    // if (!response.ok) {
    //     throw new Error('Network response was not ok')
    // }
    const data = await response.json();
    //console.log("Cakes response is ", data)
    return new Response(JSON.stringify(data))
}