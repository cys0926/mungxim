"use client";

import React, { useEffect } from "react";
import useTempStore from "@/shared/store/tempStore";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const registered = useTempStore((state) => state.registered);
  const router = useRouter();

  useEffect(() => {
    if (registered) {
      router.replace("/");
    }

    return () => {};
  }, [registered, router]);

  return children;
}
