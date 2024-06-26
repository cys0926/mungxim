import { TriangleIcon } from "lucide-react";
import { SVGProps } from "react";
import { cn } from "@/shared/lib";

type Props = SVGProps<SVGSVGElement>;

export const PrevButton = ({ className, ...props }: Props) => {
  return (
    <TriangleIcon
      className={cn(className, "fill-secondary/50 -rotate-90 stroke-none")}
      {...props}
    />
  );
};
