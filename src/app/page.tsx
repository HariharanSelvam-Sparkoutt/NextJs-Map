"use client";

import React from "react";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";

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
    </div>
  );
}
