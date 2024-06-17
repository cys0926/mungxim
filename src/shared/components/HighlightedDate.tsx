import { format } from "date-fns";

type Props = {
  date: Date;
};
export const HighlightedDate = ({ date }: Props) => {
  return (
    <h2 className="before:w-full before:h-3/5 before:bg-[#FFC7C7] before:-z-10 before:absolute relative before:top-1/3">
      {format(date, "yyyy년 M월 d일")}
    </h2>
  );
};