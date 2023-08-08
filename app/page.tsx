"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // navigate to dashboard
  // navigate('/dashboard');

  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return <main>...loading</main>;
}
