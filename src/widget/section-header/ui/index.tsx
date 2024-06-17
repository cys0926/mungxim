import { NextButton, PrevButton } from "@/shared/components";
import { cn } from "@/shared/lib";

type Props = {
  title: string;
  onNext?: () => void;
  onPrev?: () => void;
};

export const SectionHeader = ({ onPrev, onNext, title }: Props) => {
  return (
    <header className="flex items-center w-full justify-between container">
      <PrevButton
        onClick={onPrev}
        className={cn({
          invisible: !onPrev,
        })}
      />
      <h1>{title}</h1>
      <NextButton
        className={cn({
          invisible: !onNext,
        })}
        onClick={onNext}
      />
    </header>
  );
};
