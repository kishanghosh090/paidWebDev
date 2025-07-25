import { connectToDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";

import { NextResponse, NextRequest } from "next/server";

connectToDB();

// login route
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }

    if (!user.isPasswordMatched(password)) {
      return NextResponse.json(
        { error: "incorrect password" },
        { status: 400 }
      );
    }

    // send token
    const token = user.getJwtToken();

    const response = NextResponse.json(
      {
        message: "user logged in successfully",
        success: true,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
