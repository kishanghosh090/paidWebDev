import { connectToDB } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

import { User } from "@/models/userModel";
import { NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextResponse) {
  try {
    const userId = await getDataFromToken(request);
    console.log(userId);

    const user = await User.findById({ _id: userId }).select(
      "-password -__v -_id"
    );
    console.log(user);

    return NextResponse.json(
      {
        message: "user fetched successfully",
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
