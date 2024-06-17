import { RegisterBase } from "@/page/register/ui/RegisterBase";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Calendar } from "@/shared/ui/calendar";
import { Button } from "@/shared/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/shared/lib";
import { format } from "date-fns";
import { useState } from "react";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export const RegisterBirthday = ({ onNext, onPrev }: Props) => {
  const [date, setDate] = useState<Date>();

  return (
    <RegisterBase onPrev={onPrev} onNext={onNext}>
      <div className="text-center">
        <h2>아이가 태어난 날을 선택해주세요</h2>
        <p>정확하지 않아도 괜찮아요</p>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={date ? "ghost" : "outline"}
            className={cn(
              "text-2xl font-black rounded-md",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "yyyy년-MM월-dd일")
            ) : (
              <span>태어난 날 선택</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </RegisterBase>
  );
};
