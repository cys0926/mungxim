"use client";

import { RegisterProfile } from "@/page/register/ui/RegisterProfile";
import { useRouter, useSearchParams } from "next/navigation";
import { RegisterBirthday } from "@/page/register/ui/RegisterBirthday";
import { RegisterBreed } from "@/page/register/ui/RegisterBreed";
import { RegisterPersonality } from "@/page/register/ui/RegisterPersonality";
import { Step, STEP_ORDER } from "@/shared/const";

export const RegisterPage = () => {
  const searchParams = useSearchParams();
  const step = (searchParams.get("step") ?? STEP_ORDER[0]) as Step;
  const router = useRouter();
  const pushStep = (step: Step) => () => router.push(`?step=${step}`);

  switch (step) {
    case "프로필":
      return <RegisterProfile onNext={pushStep("생년월일")} />;
    case "생년월일":
      return (
        <RegisterBirthday
          onPrev={pushStep("프로필")}
          onNext={pushStep("성격")}
        />
      );
    case "성격":
      return (
        <RegisterPersonality
          onPrev={pushStep("생년월일")}
          onNext={pushStep("견종")}
        />
      );
    case "견종":
      return <RegisterBreed onPrev={pushStep("성격")} />;
    default:
      return <RegisterProfile onNext={pushStep("생년월일")} />;
  }
};
