import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { RegisterBase } from "@/page/register/ui/RegisterBase";
import { cn } from "@/shared/lib";
import { useRouter } from "next/navigation";
import useTempStore from "@/shared/store/tempStore";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const PERSONALITIES = [
  "활발한",
  "얌전한",
  "친화적인",
  "자신감있는",
  "소심한",
  "독립적인",
  "리더십있는",
  "방어적인",
] as const;

const SEXES = [
  { icon: "♀", label: "딸" },
  { icon: "♂", label: "아들" },
] as const;

export const RegisterPersonality = ({ onNext, onPrev }: Props) => {
  const [selectedPersonalities, setSelectedPersonalities] = useState<
    (typeof PERSONALITIES)[number][]
  >([]);
  const [selectedSex, setSelectedSex] = useState<"딸" | "아들">();

  return (
    <RegisterBase onPrev={onPrev} onNext={onNext}>
      <h2>아이의 성격과 성별을 알려주세요</h2>
      <div className="flex justify-center gap-x-8 w-screen">
        {SEXES.map((option, index) => (
          <Button
            key={option.label}
            variant={selectedSex === option.label ? "default" : "white"}
            className={
              "rounded-full flex flex-col w-32 h-32 items-center justify-center drop-shadow-lg"
            }
            onClick={() => setSelectedSex(option.label)}
          >
            <span className="font-black text-7xl">{option.icon}</span>
            <span className="text-3xl font-medium">{option.label}</span>
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {PERSONALITIES.map((option, index) => (
          <Button
            key={option}
            variant={
              selectedPersonalities.includes(option) ? "default" : "white"
            }
            className={cn(
              "flex flex-col w-36 drop-shadow-lg items-center justify-center",
            )}
            onClick={() =>
              setSelectedPersonalities((prev) =>
                prev.includes(option)
                  ? prev.filter((item) => item !== option)
                  : [...prev, option],
              )
            }
          >
            <span className="text-2xl">{option}</span>
          </Button>
        ))}
      </div>
    </RegisterBase>
  );
};
