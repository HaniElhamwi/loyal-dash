import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { Router } from "next/router";

function AuthHandler({ children }: { children: React.ReactChild }) {
  let router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  Router.events.on("routeChangeStart", () => setLoading(() => true));
  Router.events.on("routeChangeError", () => setLoading(false));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        if (pathname === "/signin/" || pathname === "/signin") {
          router.push("/dashboard");
        }
      } else {
        router.push("/signin");
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }
  return <> {children}</>;
}

export default AuthHandler;
