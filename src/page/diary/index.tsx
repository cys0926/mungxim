"use client";

import { SectionHeader } from "@/widget/section-header";
import { DiaryPreview } from "@/page/diary/ui/DiaryPreview";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { BookHeartIcon } from "lucide-react";

export const DiaryPage = () => {
  return (
    <main className="flex flex-col items-center container relative gap-y-6">
      <SectionHeader title="Diary" />
      <Button
        size="icon"
        variant="secondary"
        asChild
        className="fixed z-50 bottom-20 right-6"
      >
        <Link href="/diary/new">
          <BookHeartIcon />
        </Link>
      </Button>
      {Array.from({ length: 3 }).map((_, idx) => (
        <DiaryPreview key={idx} />
      ))}
    </main>
  );
};
