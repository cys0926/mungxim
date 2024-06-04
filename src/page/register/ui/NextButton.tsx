import { Button } from "@/shared/ui/button";
import { TriangleIcon } from "lucide-react";

type Props = {
  onNext: () => void;
};

export const NextButton = ({ onNext }: Props) => {
  return (
    <TriangleIcon
      className="fill-secondary/50 rotate-90 ml-auto w-12 h-12 stroke-none"
      onClick={onNext}
    />
  );
};
