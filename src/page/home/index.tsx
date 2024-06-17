"use client";

import { format } from "date-fns";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

import { HighlightedDate } from "@/shared/components";
import { PuppyAvatar } from "@/widget/puppy-avatar";

export const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-around flex-1">
      <div className="text-center flex flex-col gap-y-2 items-center">
        <HighlightedDate date={new Date()} />
        <h1 className="text-center">
          토리와 함께한 지<br />
          {format(new Date(), "d일")}
        </h1>
      </div>
      <PuppyAvatar className="w-56 h-56" />
      <p className="border border-primary p-4 text-2xl rounded-3xl text-center ">
        어제 놀러갔던 수봉공원 재밌었다멍~🐾
        <br />
        오늘도 같이 놀면 좋겠다멍
      </p>
      <Button variant="secondary" className="text-2xl p-6 rounded-full">
        <Link href={"/diary"}>오늘의 이야기 기록</Link>
      </Button>
    </main>
  );
};
