"use client";

import { SectionHeader } from "@/widget/section-header";
import { PuppyAvatar } from "@/widget/puppy-avatar";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { BellIcon, CircleHelpIcon, NotebookIcon } from "lucide-react";

export const ProfilePage = () => {
  return (
    <main className="flex flex-col ">
      <SectionHeader title="Profile" />
      <figure className="flex flex-col mt-12 items-center">
        <PuppyAvatar className="w-40 h-40" />
        <div className="items-center gap-y-1 flex flex-col">
          <h2>토리</h2>
          <h2 className="text-gray-400">푸들 / 12살 / ♀</h2>
          <Link href="#" className="text-primary text-xl font-semibold">
            내 프로필 편집
          </Link>
        </div>
      </figure>
      <section className="flex justify-center">
        <Button variant="ghost" className="h-24 w-24 flex flex-col">
          <BellIcon className="h-10 w-10 stroke-1" />
          <span>알림 관리</span>
        </Button>
        <Button variant="ghost" className="h-24 w-24 flex flex-col">
          <NotebookIcon className="h-10 w-10 stroke-1" />
          <span>Mungxim정보</span>
        </Button>
        <Button variant="ghost" className="h-24 w-24 flex flex-col">
          <CircleHelpIcon className="h-10 w-10 stroke-1" />
          <span>문의하기</span>
        </Button>
      </section>
    </main>
  );
};
