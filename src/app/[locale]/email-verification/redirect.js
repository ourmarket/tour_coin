"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/navigation"; // Usando next-intl/navigation

export default function RedirectPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  /* useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

      if (isMobile) {
        // Obtener el código desde la URL
        console.log(router);
        const { code } = router.query;
        const deepLink = `tourcoin://auth/register/step4?code=${code}`;

        // Redirigir a la app móvil
        window.location.href = deepLink;
      } else {
        // Mostrar 404 en desktop
        router.replace("/404");
      }
    }
  }, [router]);
 */

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (!code) {
        router.replace("/404"); // Si no hay código, ir a 404
        return;
      }

      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

      if (isMobile) {
        const deepLink = `tourcoin://auth/register/step4?code=${code}`;
        window.location.href = deepLink;
      } else {
        router.replace("/404"); // Si es desktop, ir a 404
      }
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        color: "#fff",
        minHeight: "100vh",
        backgroundColor: "#111",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Redirigiendo a la aplicación...</h2>
      <p style={{ fontSize: 14, color: "#ccc" }}>
        Si no eres redirigido automáticamente, asegúrate de tener la app
        instalada.
      </p>
    </div>
  );
}
