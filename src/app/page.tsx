"use client";

import React from "react";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import "./globals.css";
import { sayHello, increment, decrement } from "hello-say";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded w-100px"
        onClick={() => {
          router.push("/leafletMap");
        }}
      >
        Leaflet Map
      </button>
      <button className="mb-4 p-2 bg-blue-500 text-white rounded">
        Mapbox
      </button>
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => {
          router.push("/googleMap");
        }}
      >
        Google map
      </button>
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => sayHello("Hello from Next.js!")}
      >
        Say Hello
      </button>
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => console.log(increment(1))}
      >
        Increment
      </button>
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => console.log(decrement(1))}
      >
        Decrement
      </button>
    </div>
  );
}
