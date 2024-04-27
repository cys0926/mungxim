import React from "react";
import Image from "next/image";
import DogImage from "../public/images/dog-image.png";
import LogoVertical from "../public/images/logo-vertical.svg";
import Map from "../public/images/map.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { INSTAGRAM_LINK } from "@/lib/const/navigationTabs.const";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplyForm } from "@/components/main-page/ApplyForm";

export default function Home() {
  return (
    <main>
      <section className="bg-background">
        <div className="relative bg-background flex-col-reverse md:flex-row container justify-center gap-y-4 lg:justify-evenly min-h-screen flex items-center">
          <Image
            src={LogoVertical}
            alt="로고"
            style={{
              width: "50%",
              minWidth: "16rem",
              maxWidth: "28rem",
            }}
          />
          <div>
            <h1 className="text-4xl leading-relaxed font-black md:text-5xl md:leading-loose">
              멍심(心)
            </h1>
            <h2 className="text-2xl font-bold leading-relaxed  md:text-3xl md:leading-loose">
              댕댕이와 함께하는 마음
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white py-12" id="event">
        <div className="container min-h-screen flex justify-center flex-col items-center relative">
          <h1 className="text-center font-bold leading-relaxed xl:leading-loose text-2xl xl:text-2xl">
            2024년 4월 28일 일요일
          </h1>
          <h2 className=" text-center font-bold leading-relaxed xl:leading-loose text-lg xl:text-xl">
            오후 12 시 ~ 오후 3시
          </h2>
          <h3 className=" text-center font-bold leading-relaxed xl:leading-loose text-lg xl:text-xl">
            부천중앙공원
          </h3>
          <div className="flex items-center justify-around flex-col lg:flex-row w-full mt-10">
            <div className=" prose text-foreground text-center relative font-bold xl:text-lg justify-center">
              <p className="flex flex-wrap justify-center">
                <span>우리 집 댕댕이가 코 박고 흡입하는</span>&nbsp;
                <span>멍푸치노&멍이스티 무료 증정!</span>
              </p>
              <p className="flex flex-wrap justify-center">
                <span>사전 신청을 통해 멍푸치노&멍이스티를</span>&nbsp;
                <span> 기다림 없이, 무료로 체험해보세요!</span>
              </p>
              <p className="flex flex-wrap justify-center">
                <span>우리집 댕댕이와</span>
                &nbsp;
                <span>잊지 못할 추억을 남겨보세요.</span>
                <span>우리 집 댕댕이를 향한 마음,</span>&nbsp;
                <span>멍심(心) 이 함께합니다.</span>
              </p>
              <Image
                src={DogImage}
                alt="Dog Image"
                className="2xl:absolute 2xl:top-0 2xl:right-0 mx-auto 2xl:translate-x-full w-24"
              />
            </div>
            <Card className="border-primary relative">
              <CardHeader>
                <CardTitle>멍심 사전신청</CardTitle>
                <CardDescription>
                  2024년 4월 28일 일요일 12시 ~ 3시 부천 중앙공원
                </CardDescription>
              </CardHeader>
              <CardContent className="relative w-full max-w-96 h-fit">
                <Image src={Map} alt="Map Image" />
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" asChild>
                  <Link
                    href="https://forms.gle/tgS7YpoQZemc2YNJA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    사전신청하기
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-accent" id="survey">
        <div className="container min-h-screen flex justify-center gap-y-8 flex-col items-center relative">
          <h1 className=" text-center font-bold leading-relaxed text-3xl xl:text-5xl">
            설문조사 이벤트
          </h1>
          <div className=" prose text-foreground text-center relative font-bold xl:text-lg justify-center">
            <p className="flex flex-wrap justify-center">
              <span>오프라인 이벤트에 참여할 수 없으시다면,</span>&nbsp;
              <span>
                온라인으로 간편하게 멍푸치노&멍이스티 설문조사를 진행해보세요!
              </span>
            </p>
            <p className="flex flex-wrap justify-center">
              추첨을 통해 5분께 멍심(心)의 제품과 스타벅스 기프티콘을 드립니다.
            </p>
            <Image
              src={DogImage}
              alt="Dog Image"
              className="xl:absolute xl:top-0 xl:right-0 mx-auto xl:translate-x-full w-24"
            />
          </div>
          <Button asChild>
            <Link
              href="https://forms.gle/2bkfLk3MD3qYJnN39"
              target="_blank"
              rel="noopener noreferrer"
            >
              설문조사 하러가기
            </Link>
          </Button>
        </div>
      </section>
      <section className="bg-white" id="survey">
        <div className="container min-h-screen flex justify-center  flex-col items-center relative">
          <h1 className="text-center font-bold leading-relaxed xl:leading-loose text-2xl xl:text-2xl">
            제품 알림 받기
          </h1>
          <div className="flex items-center justify-around flex-col lg:flex-row w-full mt-10">
            <div className=" prose text-foreground text-center relative font-bold xl:text-lg justify-center">
              <p className="flex flex-wrap justify-center">
                <span>우리 집 댕댕이가 코 박고 흡입하는 </span>&nbsp;
                <span>멍심(心)의 멍푸치노&멍이스티를</span>&nbsp;
                <span> 가장 먼저 만나보고 싶으신가요?</span>
              </p>
              <p className="flex flex-wrap justify-center">
                <span>멍심(心)의 제품이 완성되는</span>&nbsp;
                <span>즉시 알림을 보내드립니다.</span>
              </p>
              <p className="flex flex-wrap justify-center">
                <span> 지금 바로 등록해주세요!</span>
              </p>
              <Image
                src={DogImage}
                alt="Dog Image"
                className="2xl:absolute 2xl:top-0 2xl:right-0 mx-auto 2xl:translate-x-full w-24"
              />
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>
    </main>
  );
}
