import { WriteDiaryPage } from "@/page/write-diary";
import { redirect } from "next/navigation";
import { Mood, MOOD_LIST } from "@/shared/const";

type Props = {
  searchParams: { mood: Mood };
};

export default function Page(props: Props) {
  const mood = props.searchParams.mood;

  if (!mood || !MOOD_LIST.includes(mood)) {
    return redirect("/");
  }

  return <WriteDiaryPage {...props} />;
}
