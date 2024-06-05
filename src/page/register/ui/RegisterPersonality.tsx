import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { RegisterBase } from "@/page/register/ui/RegisterBase";
import { cn } from "@/shared/lib";
import { useRouter } from "next/navigation";
import useTempStore from "@/shared/store/tempStore";

type Props = {
  onNext?: () => void;
};

const options = [
  "활발한",
  "얌전한",
  "친화적인",
  "자신감있는",
  "소심한",
  "독립적인",
  "리더십있는",
  "방어적인",
] as const;

export const RegisterPersonality = ({ onNext }: Props) => {
  const [selected, setSelected] = useState<(typeof options)[number][]>([]);
  const { register } = useTempStore((state) => state.actions);
  const router = useRouter();

  return (
    <RegisterBase
      offset="100%"
      title="아이의 성격을 선택해주세요"
      onNext={onNext}
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {options.map((option, index) => (
          <Button
            key={option}
            className={cn(
              "rounded-full flex flex-col w-36 shadow items-center justify-center",
              {
                "bg-white text-black": !selected.includes(option),
              },
            )}
            onClick={() =>
              setSelected((prev) =>
                prev.includes(option)
                  ? prev.filter((item) => item !== option)
                  : [...prev, option],
              )
            }
          >
            <span className="text-2xl">{option}</span>
          </Button>
        ))}
        <Button
          className="col-span-2 text-3xl rounded-full h-fit"
          variant="secondary"
          onClick={() => {
            register();
            router.push("/");
          }}
        >
          시작하기
        </Button>
      </div>
    </RegisterBase>
  );
};
