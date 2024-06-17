import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { CameraIcon } from "lucide-react";
import { RegisterBase } from "@/page/register/ui/RegisterBase";
import { useSearchParams } from "next/navigation";
import { Step, STEP_ORDER } from "@/shared/const";

type Props = {
  onNext: () => void;
};

export const RegisterProfile = ({ onNext }: Props) => {
  return (
    <RegisterBase onNext={onNext}>
      <h2>아이의 사진과 이름을 알려주세요</h2>
      <input type="file" hidden />
      <div className="relative">
        <Avatar className="w-24 p-3 h-24 bg-white relative">
          <AvatarImage
            src="/images/profile.png"
            alt="멍심 로고"
            className="object-contain"
          />
          <AvatarFallback>멍심</AvatarFallback>
        </Avatar>
        <Button
          size="icon"
          className="absolute -right-2 -bottom-2 rounded-full"
        >
          <CameraIcon className="w-8 h-8 stroke-[1.5]" />
        </Button>
      </div>
      <input
        placeholder="이름 입력"
        className="bg-transparent text-3xl text-center focus:outline-none"
      />
    </RegisterBase>
  );
};
