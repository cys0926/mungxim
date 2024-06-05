"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import useTempStore from "@/shared/store/tempStore";

export default function Layout({ children }: { children: ReactNode }) {
  const registered = useTempStore((state) => state.registered);
  const router = useRouter();

  /* TODO : 주석 해제 필요 */
  // useEffect(() => {
  //   if (!registered) {
  //     router.replace("/register");
  //   }
  // }, [registered, router]);

  return children;
}
