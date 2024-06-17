"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { CameraIcon, PlusIcon } from "lucide-react";
import { SectionHeader } from "@/widget/section-header";
import { useRouter } from "next/navigation";
import { Mood, MOOD_LIST } from "@/shared/const";
import { useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/shared/ui/calendar";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import dynamic from "next/dynamic";

const Planet = dynamic(() => import("react-planet").then((mod) => mod.Planet), {
  ssr: false,
});

export const NewDiaryPage = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date>(new Date());
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [selectedMood, setSelectedMood] = useState<Mood>();
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col items-center px-8 gap-y-6 flex-1">
      <SectionHeader title="Diary" onPrev={() => router.back()} />
      <div className="-translate-x-8 relative py-8 -translate-y-8">
        <Planet
          centerContent={
            <Button className="rounded-full p-0 w-16 h-16 bg-muted text-2xl font-semibold">
              {selectedMood ? (
                <Image
                  src={`/images/icons/${selectedMood}-icon.png`}
                  alt={selectedMood}
                  width={240}
                  height={240}
                />
              ) : (
                <PlusIcon />
              )}
            </Button>
          }
          rotation={(450 / 7) * 2}
          autoClose
          hideOrbit
          bounce
          dragablePlanet
          bounceDirection="BOTTOM"
          bounceOnClose
          open={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div />
          <div />
          {MOOD_LIST.map((mood) => (
            <button
              key={mood}
              className="relative w-16"
              onClick={() => {
                setSelectedMood(mood);
                setOpen(false);
              }}
            >
              <Image
                src={`/images/icons/${mood}-icon.png`}
                alt={mood}
                width={64}
                height={64}
              />
            </button>
          ))}
        </Planet>
      </div>
      <div className="text-center">
        <Popover>
          <PopoverTrigger>
            <h2 className="text-2xl underline">
              {format(date, "yyyy년 MM월 dd일")}
            </h2>
          </PopoverTrigger>
          <PopoverContent>
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
        <h2>행복했던 오늘, 무슨 일이 있었나요?</h2>
      </div>
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
      <Button
        className="w-full text-3xl h-14"
        onClick={() => router.push("/diary")}
      >
        작성완료
      </Button>
    </main>
  );
};
