"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function ApplyForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    if (loading) return;
    if (!phoneNumber.length || phoneNumber.length < 12) {
      alert("전화번호가 올바르지 않습니다. 다시 확인해주세요.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    if (!res.ok) {
      alert("알림신청이 실패했습니다.\nmungxim4@gmail.com 으로 문의해주세요.");
    } else {
      alert("알림신청이 완료되었습니다.");
    }

    setLoading(false);
  };

  return (
    <Card className="border-primary w-full max-w-screen-sm relative">
      <CardHeader>
        <CardTitle>멍심 사전신청</CardTitle>
        <CardDescription>
          멍심 제품이 완성되는 즉시 알림을 받아보세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <Label>전화번호</Label>
        <PhoneInput
          containerStyle={{ width: "100%", flex: 1 }}
          inputStyle={{ width: "100%" }}
          country={"kr"}
          onlyCountries={["kr"]}
          disableDropdown
          countryCodeEditable={false}
          placeholder="전화번호"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
      </CardContent>
      <CardFooter>
        <Button disabled={loading} onClick={onClick}>
          알림신청하기
        </Button>
      </CardFooter>
    </Card>
  );
}
