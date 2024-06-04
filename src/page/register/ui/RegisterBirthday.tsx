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
};

export const RegisterBirthday = ({ onNext }: Props) => {
  const [date, setDate] = useState<Date>();

  return (
    <RegisterBase
      offset="50%"
      title="아이가 태어난 날을 선택해주세요"
      onNext={onNext}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("text-2xl", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "yyyy년-mm월-dd일") : <span>태어난 날 선택</span>}
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
