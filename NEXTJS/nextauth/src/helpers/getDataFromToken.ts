import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (request: NextResponse) => {
  try {
    const encodedToken = request.cookies.get("token")?.value || "";
    console.log(encodedToken);

    const decodedToken: any = await jwt.verify(
      encodedToken,
      process.env.JWT_SECRET as string
    );
    console.log(decodedToken);

    return decodedToken.id;
  } catch (error) {
    return null;
  }
};
