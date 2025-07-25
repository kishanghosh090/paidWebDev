import { connectToDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import { User } from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connectToDB();

//

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, username, password } = reqBody;

    // if user already exists

    const user = await User.findOne({ email });

    if (user) {
      console.log("user already exists");

      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();

    // send verification email
    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: savedUser._id,
    });

    return NextResponse.json(
      {
        message: "user created successfully",
        success: true,
        savedUser,
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
