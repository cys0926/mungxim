"use client";

import Image from "next/image";
import LogoHorizontal from "@/public/images/logo-horizontal.svg";
import { NAVIGATION_TABS } from "@/lib/const/navigationTabs.const";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  //   스크롤하면 bg-white로 변경
  const [scroll, setScroll] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <header
      className={cn("fixed transition-all duration-1000 w-full top-0 z-50", {
        "bg-white/50": scroll,
        "bg-transparent": !scroll,
      })}
    >
      <div className="h-24 container flex justify-between py-4">
        <Image
          src={LogoHorizontal}
          alt="Main Logo"
          style={{
            height: "100%",
            width: "auto",
          }}
        />
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            {NAVIGATION_TABS.map((tab) => (
              <li key={tab.title}>
                <Button
                  variant="ghost"
                  className={cn("text-base hover:text-white", {})}
                >
                  <Link href={tab.link}>{tab.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
