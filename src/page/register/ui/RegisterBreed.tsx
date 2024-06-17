import React, { useState } from "react";
import { Button, buttonVariants } from "@/shared/ui/button";
import { RegisterBase } from "@/page/register/ui/RegisterBase";
import { cn } from "@/shared/lib";
import { Checkbox } from "@/shared/ui/checkbox";
import { useRouter } from "next/navigation";

const PERSONALITIES = [
  "푸들",
  "말티즈",
  "시츄",
  "골든 리트리버",
  "치와와",
  "진돗개",
  "보더콜리",
  "시고르자브즈",
];

type Props = {
  onPrev: () => void;
};

export const RegisterBreed = ({ onPrev }: Props) => {
  const router = useRouter();
  const [breed, setBreed] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreed(e.target.value);
  };

  return (
    <RegisterBase onPrev={onPrev}>
      <h2>아이의 견종을 알려주세요</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {PERSONALITIES.map((option, index) => (
          <Button
            key={option}
            variant={breed === option ? "default" : "white"}
            className={
              "rounded-full flex flex-col w-36 drop-shadow-lg items-center justify-center"
            }
            onClick={() => setBreed(option)}
          >
            <span className="text-2xl">{option}</span>
          </Button>
        ))}
        <input
          placeholder="직접 입력"
          className={cn(
            buttonVariants({
              variant: "white",
            }),
            "rounded-full flex flex-col drop-shadow-lg items-center justify-center col-span-2 text-center text-2xl",
          )}
          onClick={() => setBreed("")}
          onChange={onChange}
          value={breed}
        />
      </div>
      <div>
        <div className="flex items-center gap-x-1">
          <Checkbox id="terms" />
          <a className="underline">(필수) 이용약관</a>
        </div>
        <div className="flex items-center gap-x-1">
          <Checkbox id="privacy_terms" />
          <a className="underline">(필수) 개인 정보 수집 / 이용 동의</a>
        </div>
      </div>
      <Button
        variant="secondary"
        className="w-44 text-2xl"
        onClick={() => router.push("/")}
      >
        시작하기
      </Button>
    </RegisterBase>
  );
};
