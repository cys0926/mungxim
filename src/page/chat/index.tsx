"use client";

import { SectionHeader } from "@/widget/section-header";
import { ChatMessage } from "@/page/chat/ui/ChatMessage";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

const DUMMY_MESSAGES = [
  {
    id: 1,
    content: "오늘은 무슨 생각했어요?",
    role: "assistant",
  },
  {
    id: 2,
    content: "네가 있어서 행복해",
    role: "user",
  },
  {
    id: 3,
    content: "나도 그래요",
    role: "assistant",
  },
  {
    id: 4,
    content: "수봉공원 또 가고 싶어요",
    role: "assistant",
  },
  {
    id: 5,
    content: "오늘은 무슨 생각했어요?",
    role: "assistant",
  },
  {
    id: 6,
    content: "네가 있어서 행복해",
    role: "user",
  },
  {
    id: 7,
    content: "나도 그래요",
    role: "assistant",
  },
  {
    id: 8,
    content: "수봉공원 또 가고 싶어요",
    role: "assistant",
  },
  {
    id: 9,
    content: "수봉공원 또 가고 싶어요",
    role: "assistant",
  },
  {
    id: 10,
    content:
      "수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. ",
    role: "assistant",
  },
  {
    id: 11,
    content: "네가 있어서 행복해",
    role: "user",
  },
  {
    id: 12,
    content: "나도 그래요",
    role: "assistant",
  },
  {
    id: 13,
    content: "수봉공원 또 가고 싶어요",
    role: "assistant",
  },
  {
    id: 14,
    content: "네가 있어서 행복해",
    role: "user",
  },
  {
    id: 15,
    content: "나도 그래요",
    role: "assistant",
  },
  {
    id: 16,
    content:
      "수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. 수봉공원 또 가고 싶어요. ",
    role: "assistant",
  },
] as const;

export const ChatPage = () => {
  return (
    <main className="flex flex-col overflow-scroll max-h-full h-full flex-1">
      <SectionHeader title="Talk" />
      <section className="overflow-y-auto flex-1 gap-y-2 px-4 flex flex-col py-2">
        {DUMMY_MESSAGES.map((message, idx) => (
          <ChatMessage key={idx} message={message} />
        ))}
      </section>
      <form className="flex items-center sticky bottom-0 gap-x-2 px-2 my-2">
        <Input
          placeholder="메시지를 입력하세요"
          className="shadow-md outline-0 border-0"
        />
        <Button className="shadow-md rounded-lg" type="button">
          전송
        </Button>
      </form>
    </main>
  );
};
