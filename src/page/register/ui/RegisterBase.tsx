import { ReactNode } from "react";
import { NextButton } from "@/page/register/ui/NextButton";
import { HeartIcon } from "@/shared/assets/heart";

type Props = {
  title: string;
  children: ReactNode;
  onNext?: () => void;
  offset: string;
};

export const RegisterBase = ({ title, children, onNext, offset }: Props) => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-start items-center gap-y-6">
        <HeartIcon className="w-12 h-12" offset={offset} />
        <h2>{title}</h2>
        {children}
      </div>
      {onNext && <NextButton onNext={onNext} />}
    </>
  );
};
