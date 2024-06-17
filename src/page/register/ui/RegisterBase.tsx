import { ReactNode } from "react";
import { HeartIcon } from "@/shared/assets";
import { cn } from "@/shared/lib";
import { useSearchParams } from "next/navigation";
import { Step, STEP_ORDER } from "@/shared/const";
import { SectionHeader } from "@/widget/section-header";

type Props = {
  children: ReactNode;
  onNext?: () => void;
  onPrev?: () => void;
  className?: string;
};

export const RegisterBase = ({
  children,
  onNext,
  onPrev,
  className,
}: Props) => {
  const searchParams = useSearchParams();
  const step = (searchParams.get("step") ?? STEP_ORDER[0]) as Step;
  const order = STEP_ORDER.indexOf(step);
  const offset = order / (STEP_ORDER.length - 1);

  return (
    <main className="min-h-[60dvh] flex flex-col gap-y-6 items-center justify-between">
      <SectionHeader onPrev={onPrev} onNext={onNext} title="Mungxim" />
      <HeartIcon className="w-12 h-12" offset={offset} />
      <div
        className={cn(
          "flex flex-1 flex-col justify-start items-center gap-y-8",
          className,
        )}
      >
        {children}
      </div>
    </main>
  );
};
