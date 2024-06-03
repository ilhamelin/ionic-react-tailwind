import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Mapa = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return; // Evitar errores si mapRef.current es null

    const loader = new Loader({
      apiKey: "AIzaSyB9OZu4qBJUXoTZfyQKpY6Psk-mZIWi2TA",
      version: "weekly",
    });

    loader
      .load()
      .then(() => {
        return loader.importLibrary("geometry");
      })
      .then(() => {
        const map = new google.maps.Map(mapRef.current!, {
          center: { lat: -33.4489, lng: -70.6693 },
          zoom: 13,
        });

        new google.maps.Marker({
          position: { lat: -33.4489, lng: -70.6693 },
          map,
        });
      });
  }, []);

  return <div ref={mapRef} style={{ height: "700px", width: "100%" }} />;
};

export default Mapa;

// AIzaSyB9OZu4qBJUXoTZfyQKpY6Psk-mZIWi2TA

