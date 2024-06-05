"use client";

import { format } from "date-fns";
import { MenuIcon, PlusIcon } from "lucide-react";
import { ChatIcon } from "@/shared/assets";
import { Planet } from "react-planet";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
  return (
    <main className="flex flex-col relative items-center flex-1">
      <MenuIcon className="absolute left-4 w-10 h-10" />
      <h1 className="text-center">
        &lsquo;이름&rsquo;과 함께한 지<br />
        00일
      </h1>
      <h2 className="mt-1 relative">
        {format(new Date(), "yyyy년 M월 d일")}
        <div className="absolute left-0 right-0 bg-primary/30 h-1/2 bottom-0 -z-10" />
        <ChatIcon className="rounded-full bg-primary w-12 h-12 absolute p-1 translate-x-full -right-6 top-1/2 -translate-y-1/2" />
      </h2>
      <div className="-translate-x-6 bottom-0 absolute -translate-y-24">
        <Planet
          centerContent={
            <Button size="icon" variant="secondary" className="rounded-full">
              <PlusIcon />
            </Button>
          }
          rotation={(180 / 7) * 2}
          autoClose
          hideOrbit
          bounce
          dragablePlanet
          bounceDirection="BOTTOM"
          bounceOnClose
        >
          {["angry", "sad", "calm", "excited", "shy"].map((mood) => (
            <Link
              key={mood}
              href={`/diary/write?mood=${mood}`}
              className="relative w-16 h-16 flex"
            >
              <Image
                src={`/images/icons/${mood}-icon.png`}
                alt={mood}
                width={64}
                height={64}
              />
            </Link>
          ))}
          <div />
          <div />
        </Planet>
      </div>
    </main>
  );
};
