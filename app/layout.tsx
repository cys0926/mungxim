import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "멍심(Mungxim) | 멍心",
  description: "멍심(Mungxim)은 멍멍이와 함께하는 마음을 담은 프로젝트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col",
          pretendard.className,
          pretendard.variable,
        )}
      >
        <Header />
        {children}
        <footer className="flex justify-center items-center h-16 bg-gray-100">
          <p className="text-sm text-gray-600">
            &copy; 2021 Mungxim. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
