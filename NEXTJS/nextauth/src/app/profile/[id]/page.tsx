"use client";

export default function profilePage({ params }: any) {
//   console.log(params.id);
  return (
    <div className="text-3xl">
      <h1>Profile {params.id}</h1>
    </div>
  );
}
