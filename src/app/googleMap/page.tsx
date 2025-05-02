"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then((google) => {
      if (!mapRef.current || !inputRef.current) return;

      // Initialize map
      mapInstance.current = new google.maps.Map(mapRef.current, {
        center: { lat: 11.0168, lng: 76.9558 },
        zoom: 12,
      });

      // Attach autocomplete
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current!,
        {
          fields: ["geometry"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        if (!place.geometry?.location) {
          alert("No details available for this place.");
          return;
        }

        const location = place.geometry.location;
        mapInstance.current?.setCenter(location);
        mapInstance.current?.setZoom(15);

        new google.maps.Marker({
          position: location,
          map: mapInstance.current!,
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
      <h1 className="text-2xl font-bold mb-2">Google Map with Search</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search a place"
        className="w-full max-w-md p-2 border border-gray-300 rounded-md"
      />
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", maxWidth: "800px" }}
      />
    </div>
  );
}
