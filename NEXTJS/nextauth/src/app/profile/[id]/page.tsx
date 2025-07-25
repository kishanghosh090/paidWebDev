"use client";
import { useParams } from "next/navigation";

// interface Params {
//   id: string;
// }

export default function ProfilePage() {
  const params = useParams<{ id: string }>();
  console.log(params);

  return (
    <div className="text-3xl">
      <h1>Profile {params.id}</h1>
    </div>
  );
}
