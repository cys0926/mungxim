import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { RegisterBase } from "@/page/register/ui/RegisterBase";
import { cn } from "@/shared/lib";

type Props = {
  onNext?: () => void;
};

const options = [
  { icon: "♀", label: "딸" },
  { icon: "♂", label: "아들" },
] as const;

export const RegisterSex = ({ onNext }: Props) => {
  const [selected, setSelected] = useState<"딸" | "아들">();

  return (
    <RegisterBase
      offset="75%"
      title="아이의 성별을 선택해주세요"
      onNext={onNext}
    >
      <div className="flex justify-center gap-x-8 w-screen">
        {options.map((option, index) => (
          <Button
            key={option.label}
            className={cn(
              "rounded-full flex flex-col w-32 h-32 items-center justify-center",
              {
                "bg-white hover:bg-primary/60 text-black hover:text-white":
                  selected !== option.label,
              },
            )}
            onClick={() => setSelected(option.label)}
          >
            <span className="font-black text-7xl">{option.icon}</span>
            <span className="text-3xl font-medium">{option.label}</span>
          </Button>
        ))}
      </div>
    </RegisterBase>
  );
};
