import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.BASE_URL

export async function GET(request:NextRequest){
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '0'; // Default to 0 if not provided
    const limit = searchParams.get('limit') || '10'; // Default to 10 if not provided


    const response = await fetch(`${BASE_URL}/orders?page=${page}&limit=${limit}`)
    const data = await response.json();
    return new Response(JSON.stringify(data))
}

export async function POST(request:NextRequest){
    try{
        const orderData = await request.json();

        const response = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })

        if (!response.ok) {
            return new NextResponse(JSON.stringify({ message: 'Failed to create order' }), { status: response.status });
        }

        const result = await response.json()
        console.log('Order created:', result.message);
        return new NextResponse(JSON.stringify(result), { status: 201 })
    } catch (error) {
        console.error('Error creating order:', error);
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}