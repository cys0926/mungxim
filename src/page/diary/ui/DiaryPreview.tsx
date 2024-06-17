import { HighlightedDate } from "@/shared/components";
import { subDays } from "date-fns";
import Image from "next/image";
import DiaryPreviewImage from "$/dummy/diary-preview.png";
import { MOOD_LIST } from "@/shared/const";

export const DiaryPreview = () => {
  const randomDay = Math.floor(Math.random() * 30);
  const randomMood = Math.floor(Math.random() * 5);
  const mood = MOOD_LIST[randomMood];

  return (
    <figure className="flex flex-col items-center gap-y-3">
      <HighlightedDate date={subDays(new Date(), randomDay)} />
      <div className="relative">
        <div className="absolute flex justify-center left-1/2 -translate-x-1/2 top-2 bg-black w-[90%] text-white rounded-full">
          <Image
            className="absolute left-0 top-1/2 -translate-y-1/2"
            src={`/images/icons/${mood}-icon.png`}
            alt={mood}
            width={52}
            height={52}
          />
          <p className="pl-14 pr-6 leading-tight line-clamp-2 py-1">
            다람쥐가 돌아다니는 모습에 눈길이 갔다. 또 주인님과 함께 산책나오고
            싶다
          </p>
        </div>
        <Image src={DiaryPreviewImage} alt="Diary Preview" />
      </div>
      <p className="line-clamp-3">
        오랜만에 또리와 함께 바다에 왔다. 신나하는 모습을 보니 앞으로도 자주
        와야 겠다는 생각이 들었다. 더 자주 놀러오자 오랜만에 또리와 함께 바다에
        왔다. 신나하는 모습을 보니 앞으로도 자주 와야 겠다는 생각이 들었다. 더
        자주 놀러오자
      </p>
    </figure>
  );
};
