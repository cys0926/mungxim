import { NextRequest } from "next/server";
import nodemailer from "nodemailer"; // 모듈 import

export async function POST(req: NextRequest) {
  const { phoneNumber } = await req.json();
  console.log(phoneNumber)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mungxim4@gmail.com", // 나의 (작성자) 이메일 주소
      pass: "hedx fzlu ilqt ronk", // 이메일의 비밀번호
    },
  });

  const mailOptions = {
    from: "mungxim4@gmail.com", // 작성자
    to: "mungxim4@gmail.com", // 수신자
    subject: "멍심 알림신청", // 메일 제목
    text: `${phoneNumber}`, // 메일 내용
  };

  await transporter.sendMail(mailOptions); // 메일 전송

  console.log(phoneNumber);
  return new Response("success", { status: 200 });
}
