import { cn } from "@/shared/lib";

export const ChatTail = ({ isMe }: { className?: string; isMe: boolean }) => {
  return (
    <svg
      className={cn("absolute top-1/2 transform -z-10 -translate-y-1/2", {
        "right-0 translate-x-1/2 scale-x-[-1]": isMe,
        "left-0 -translate-x-1/2": !isMe,
      })}
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4995 14.3843C10.0834 8.8094 5.12489 5.20611 0.125415 4.18482C10.9064 -2.43527 20.0882 1.72352 22.8592 5.44702C17 23 14.5 19 12.4995 14.3843Z"
        fill="white"
      />
    </svg>
  );
};
