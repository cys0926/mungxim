import "./globals.css";
import { cn } from "@/shared/lib";
import localFont from "next/font/local";
import { AuthProvider } from "@/app/provider";

const nanum = localFont({
  src: "./NanumBaegEuiEuiCeonSa.ttf",
  variable: "--font-nanum",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "flex flex-col pt-8 max-h-dvh bg-background h-dvh min-h-dvh",
          nanum.className,
          nanum.variable,
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
