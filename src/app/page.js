"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  const handleClick = async (e) => {
    console.log(e);
    const response = await fetch("/api/leads");
    setData(await response.json());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello There</h1>
      <button className="bg-red-500 p-2 rounded-md" onClick={handleClick}>
        Click Me
      </button>
      {data && JSON.stringify(data)}
    </main>
  );
}
