"use client";

import { RegisterImage } from "@/page/register/ui/RegisterImage";
import { RegisterName } from "@/page/register/ui/RegisterName";
import { useRouter, useSearchParams } from "next/navigation";
import { PrevButton } from "@/page/register/ui/PrevButton";
import { RegisterBirthday } from "@/page/register/ui/RegisterBirthday";
import { RegisterSex } from "@/page/register/ui/RegisterSex";
import { RegisterPersonality } from "@/page/register/ui/RegisterPersonality";

type Step = "이미지" | "이름" | "생년월일" | "성별" | "성격";

export const RegisterPage = () => {
  const searchParams = useSearchParams();
  const step = (searchParams.get("step") ?? "이미지") as Step;
  const router = useRouter();

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-between">
      <div className="flex justify-start px-2 items-end w-full">
        {step !== "이미지" && <PrevButton />}
      </div>
      {step === "이미지" && (
        <RegisterImage onNext={() => router.push("?step=이름")} />
      )}
      {step === "이름" && (
        <RegisterName onNext={() => router.push("?step=생년월일")} />
      )}
      {step === "생년월일" && (
        <RegisterBirthday onNext={() => router.push("?step=성별")} />
      )}
      {step === "성별" && (
        <RegisterSex onNext={() => router.push("?step=성격")} />
      )}
      {step === "성격" && <RegisterPersonality />}
    </main>
  );
};
