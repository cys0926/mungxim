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

export default function Home() {
  return (
    <main>
      <section className="bg-background">
        <div className="relative bg-background flex-col-reverse lg:flex-row container justify-center gap-y-4 lg:justify-evenly min-h-screen flex items-center">
          <Image
            src={LogoVertical}
            alt="로고"
            style={{
              width: "50%",
              minWidth: "16rem",
              maxWidth: "28rem",
            }}
            className="border-2 border-foreground/80 rounded-2xl shadow-xl drop-shadow-xl"
          />
          <div>
            <h1 className="text-6xl lg:text-8xl leading-relaxed items-center flex font-black text-foreground">
              멍心
            </h1>
            <h2 className="text-foreground font-bold leading-relaxed text-3xl xl:text-5xl">
              멍멍이와 함께하는 마음
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white py-12" id="event">
        <div className="container min-h-screen flex justify-center flex-col items-center relative">
          <h1 className="text-foreground text-center font-bold leading-relaxed text-3xl xl:text-5xl">
            2024년 04월 27일 12시
            <br />
            인천 송도 도그파크
          </h1>
          <div className="flex items-center justify-around flex-col lg:flex-row w-full mt-10">
            <p className="text-foreground relative font-bold leading-relaxed xl:text-2xl text-center">
              멍멍이를 위한 행복한 시간을 준비했습니다. <br />
              멍멍이와 함께하는 행복한 시간을 보내고 싶으신가요? <br />
              지금 바로 신청해주세요!
              <Image
                src={DogImage}
                alt="Dog Image"
                className="lg:absolute lg:top-0 lg:right-0 mx-auto lg:translate-x-full w-24"
              />
            </p>
            <Card className="border-primary relative">
              <CardHeader>
                <CardTitle>멍심 사전신청</CardTitle>
                <CardDescription>
                  2024년 04월 27일 12시 인천 송도 도그파크
                </CardDescription>
              </CardHeader>
              <CardContent className="relative h-96">
                <Image
                  src={Map}
                  alt="Map Image"
                  style={{
                    height: "100%",
                    width: "fit-content",
                  }}
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  사전신청하기
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-accent" id="survey">
        <div className="container min-h-screen flex justify-center gap-y-8 flex-col items-center relative">
          <h1 className="text-foreground text-center font-bold leading-relaxed text-3xl xl:text-5xl">
            설문조사 이벤트
          </h1>
          <p className="text-foreground relative font-bold leading-relaxed xl:text-2xl text-center">
            오프라인 이벤트에 참여하지 못하는 분들을 대상으로 <br />
            설문조사 참여 후 추첨으로 제품 제공 이벤트를 진행합니다. <br />
            설문조사 참여 후 추첨으로 제품을 받아보세요!
            <Image
              src={DogImage}
              alt="Dog Image"
              className="lg:absolute lg:top-0 lg:right-0 mx-auto lg:translate-x-full w-24"
            />
          </p>
          <Button asChild>
            <Link href={INSTAGRAM_LINK}>설문조사 하러가기</Link>
          </Button>
        </div>
      </section>
      <section className="bg-white" id="survey">
        <div className="container min-h-screen flex justify-center  flex-col items-center relative">
          <h1 className="text-foreground text-center font-bold leading-relaxed text-3xl xl:text-5xl">
            제품 알림 받기
          </h1>
          <div className="flex items-center justify-around flex-col lg:flex-row w-full mt-10">
            <p className="text-foreground relative font-bold leading-relaxed xl:text-2xl text-center">
              멍심의 제품이 완성되면 알림을 받아보세요! <br />
              멍심의 제품을 먼저 만나보고 싶으신가요? <br />
              지금 바로 등록해주세요!
              <Image
                src={DogImage}
                alt="Dog Image"
                className="lg:absolute lg:top-0 lg:right-0 mx-auto lg:translate-x-full w-24"
              />
            </p>
            <Card className="border-primary relative w-96">
              <CardHeader>
                <CardTitle>멍심 사전신청</CardTitle>
                <CardDescription>
                  2024년 04월 27일 12시 인천 송도 도그파크
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <Label htmlFor="phoneNumber">전화번호</Label>
                <Input id="phoneNumber" placeholder="전화번호" />
              </CardContent>
              <CardFooter>
                <Button type="submit">알림신청하기</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
