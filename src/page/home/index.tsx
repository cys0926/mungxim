import { format } from "date-fns";
import { MenuIcon } from "lucide-react";

export const HomePage = () => {
  return (
    <main className="max-h-[50vh] h-[50vh] flex flex-col items-center">
      <MenuIcon className="absolute left-4 w-10 h-10" />
      <h1 className="text-center">
        &lsquo;이름&rsquo;과 함께한 지<br />
        00일
      </h1>
      <h2 className="mt-1 relative">
        {format(new Date(), "yyyy년 M월 d일")}
        <div className="absolute left-0 right-0 bg-primary/30 h-1/2 bottom-0 -z-10" />
      </h2>
    </main>
  );
};
