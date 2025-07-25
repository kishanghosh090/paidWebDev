"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VerifyEmailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  console.log(params);

  useEffect(() => {
    async function verifyEmail() {
      try {
        await axios.post("/api/users/verifyToken", {
          token: params?.id,
        });
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
    verifyEmail();
  }, [params.id, router]);

  return (
    <div className="text-3xl">
      <h1>Verify Email</h1>
    </div>
  );
}
