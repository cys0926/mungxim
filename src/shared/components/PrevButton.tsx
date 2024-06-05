"use client";

import { useRouter } from "next/navigation";

export const PrevButton = () => {
  const router = useRouter();
  return (
    <u
      className="text-2xl font-medium left-4 top-16 absolute"
      onClick={() => router.back()}
    >
      이전
    </u>
  );
};
