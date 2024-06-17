"use client";

import { BookHeartIcon, CircleUserIcon, DogIcon } from "lucide-react";
import { ChatIcon } from "@/shared/assets";
import { cn } from "@/shared/lib";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAVS = [
  { icon: DogIcon, href: "/" },
  { icon: BookHeartIcon, href: "/diary" },
  { icon: ChatIcon, href: "/chat" },
  { icon: CircleUserIcon, href: "/profile" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  return (
    <div className="flex flex-col h-full max-h-full">
      <main className="flex flex-col flex-1 overflow-y-auto">{children}</main>
      <nav className="flex justify-around border-t sticky bottom-0 items-center bg-background py-3">
        {NAVS.map(({ icon: Icon, href }) => (
          <Link href={href} key={href}>
            <Icon
              className={cn("h-10 stroke-[1.5] w-auto stroke-gray-400", {
                "stroke-primary": pathName === href,
              })}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
