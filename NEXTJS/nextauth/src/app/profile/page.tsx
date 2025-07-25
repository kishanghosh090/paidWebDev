"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";
export default function ProfilePage(): JSX.Element {
  const router = useRouter();
  const [user, setUser] = useState<{ username: string; email: string }>({
    username: "",
    email: "",
  });
  async function handleLogout() {
    try {
      await axios.get("/api/users/logout");

      router.push("/login", {
        scroll: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get("/api/users/me");
        setUser(response.data.user);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);
  return (
    <div className="text-3xl h-[100vh] flex flex-col items-center justify-center ">
      <h1>Profile</h1>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
