import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";

export const PrevButton = () => {
  const router = useRouter();
  return (
    <u className="text-2xl font-medium" onClick={() => router.back()}>
      이전
    </u>
  );
};
