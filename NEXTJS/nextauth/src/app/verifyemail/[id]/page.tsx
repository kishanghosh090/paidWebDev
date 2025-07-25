"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function VerifyEmailPage({ params }: any) {
  const router = useRouter();
  useEffect(() => {
    async function verifyEmail() {
      try {
        // console.log(id);

        await axios.post("/api/users/verifyToken", { token: params.id });
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
    verifyEmail();
  }, []);
  return (
    <div className="text-3xl">
      <h1>Verify Email</h1>
    </div>
  );
}
