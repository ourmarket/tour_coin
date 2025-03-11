"use client";
import { Loading } from "@/components/loader/Loading";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "drawing", "geometry"];

export const MapProvider = ({ children }) => {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
    libraries: libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
      </div>
    );
  return children;
};
