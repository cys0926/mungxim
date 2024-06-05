"use client";

import { Mood } from "@/shared/const";
import { format } from "date-fns";
import { PrevButton } from "@/shared/components";
import Image from "next/image";
import { useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib";
import { CameraIcon } from "lucide-react";
import { Calendar } from "@/shared/ui/calendar";
import { Textarea } from "@/shared/ui/textarea";
import { Input } from "@/shared/ui/input";

type Props = {
  searchParams: { mood: Mood };
};

export const WriteDiaryPage = ({ searchParams }: Props) => {
  const { mood } = searchParams;
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(true);
  const imageInputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex flex-col items-center px-8 gap-y-5">
      <div
        className={cn(
          "absolute inset-0 pointer-events-none bg-black transition-opacity duration-300",
          {
            "opacity-30": open,
            "opacity-0": !open,
          },
        )}
      />
      <PrevButton />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <h2 className="text-2xl underline">{format(date, "M/d")}</h2>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 translate-y-1/2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              if (!date) return;
              setDate(date);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Image
        src={`/images/icons/${mood}-icon.png`}
        alt={mood}
        width={72}
        height={72}
      />
      <h2>행복했던 오늘, 무슨 일이 있었나요?</h2>
      <Button
        variant="secondary"
        className="px-12 py-3 h-fit rounded-3xl w-full gap-x-4"
        onClick={() => imageInputRef.current?.click()}
      >
        <CameraIcon className="w-12 h-12 stroke-[1.5]" />
        <div>
          <span className="font-light">
            사진을 넣으면 반려동물이 소감을 적어줘요!
          </span>
          <h2 className="font-semibold">사진 넣기</h2>
        </div>
      </Button>
      <Input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
      />
      <Textarea
        maxLength={500}
        rows={5}
        className="rounded-3xl px-6 py-4 text-xl focus:outline-none"
        placeholder="이곳에 일기를 써주세요."
      />
    </main>
  );
};
