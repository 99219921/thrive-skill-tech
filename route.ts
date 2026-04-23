import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: create Razorpay order securely on the server and return order_id
  return NextResponse.json({
    success: true,
    order: {
      id: "order_mock_123",
      amount: body.amount,
      currency: "INR"
    }
  });
}
