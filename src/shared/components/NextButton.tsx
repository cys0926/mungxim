import { TriangleIcon } from "lucide-react";
import { cn } from "@/shared/lib";
import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const NextButton = ({ className, ...props }: Props) => {
  return (
    <TriangleIcon
      className={cn(className, "fill-secondary/50 rotate-90 stroke-none")}
      {...props}
    />
  );
};
