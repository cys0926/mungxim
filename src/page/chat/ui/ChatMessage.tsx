import { PuppyAvatar } from "@/widget/puppy-avatar";
import { ChatTail } from "@/page/chat/ui/ChatTail";
import { cn } from "@/shared/lib";

type Props = {
  message: {
    id: number;
    content: string;
    role: "user" | "assistant";
  };
};

export const ChatMessage = ({ message }: Props) => {
  const { content, role } = message;
  const isMe = role === "user";
  return (
    <figure
      className={cn("flex gap-x-4 items-center", {
        "justify-end": isMe,
        "justify-start": !isMe,
      })}
    >
      {!isMe && <PuppyAvatar />}
      <p className="rounded-3xl h-fit bg-white relative text-lg px-3 py-1 max-w-[66%]">
        <ChatTail isMe={isMe} />
        {content}
      </p>
    </figure>
  );
};
