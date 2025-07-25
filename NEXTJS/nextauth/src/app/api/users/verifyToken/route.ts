import { connectToDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const user = await User.findOne({
      verifyToken: token,
    });
    console.log(user?.verifyTokenExpiry < Date.now());
    console.log(user.verifyTokenExpiry, Date.now());

    if (user && user?.verifyTokenExpiry < Date.now()) {
      return NextResponse.json({ error: "token expired" }, { status: 400 });
    }

    // if (!user) {
    // return NextResponse.json({ error: "token expired" }, { status: 400 });
    // }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();
    return NextResponse.json(
      {
        message: "email verified successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
