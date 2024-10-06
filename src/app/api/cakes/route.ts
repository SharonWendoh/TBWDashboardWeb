import { NextRequest } from "next/server";

const BASE_URL = process.env.BASE_URL
export async function GET(request:NextRequest){
    const response = await fetch(`${BASE_URL}/cakes`)

    // if (!response.ok) {
    //     throw new Error('Network response was not ok')
    // }
    const data = await response.json();
    //console.log("Cakes response is ", data)
    return new Response(JSON.stringify(data))
}