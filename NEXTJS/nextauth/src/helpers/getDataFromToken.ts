import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  email?: string;
  username?: string;
}
export const getDataFromToken = async (request: NextRequest) => {
  try {
    const encodedToken = request.cookies.get("token")?.value || "";
    console.log(encodedToken);

    const decodedToken = (await jwt.verify(
      encodedToken,
      process.env.JWT_SECRET as string
    )) as DecodedToken;
    console.log(decodedToken);

    return decodedToken.id;
  } catch (error) {
    return null;
  }
};
