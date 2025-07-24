import { connectToDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { error } from "console";
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

    return NextResponse.json(
      {
        message: "user created successfully",
        success: true,
        savedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
