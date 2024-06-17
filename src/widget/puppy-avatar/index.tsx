import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { cn } from "@/shared/lib";

type Props = {
  className?: string;
};

export const PuppyAvatar = ({ className }: Props) => {
  return (
    <Avatar className={cn("w-12 h-12 relative", className)}>
      <AvatarImage
        src="/dummy/tory.png"
        alt="멍심 로고"
        className="object-cover"
      />
      <AvatarFallback>멍심</AvatarFallback>
    </Avatar>
  );
};
