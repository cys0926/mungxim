import { RegisterPage } from "@/page/register";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <RegisterPage />
    </Suspense>
  );
}
