import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { NextButton } from "@/page/register/ui/NextButton";
import { Button } from "@/shared/ui/button";
import { CameraIcon } from "lucide-react";
import { RegisterBase } from "@/page/register/ui/RegisterBase";

type Props = {
  onNext: () => void;
};

export const RegisterImage = ({ onNext }: Props) => {
  return (
    <RegisterBase offset="0%" title="아이의 사진을 넣어주세요" onNext={onNext}>
      <input type="file" hidden />
      <div className="relative">
        <Avatar className="w-28 h-28 bg-white relative">
          <AvatarImage
            src="/images/logos/main-logo.png"
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
    </RegisterBase>
  );
};
