import { RegisterBase } from "@/page/register/ui/RegisterBase";

type Props = {
  onNext: () => void;
};

export const RegisterName = ({ onNext }: Props) => {
  return (
    <RegisterBase
      offset="25%"
      title="아이의 이름을 입력해주세요"
      onNext={onNext}
    >
      <input
        placeholder="이름 입력"
        className="bg-transparent text-4xl text-center focus:outline-none"
      />
    </RegisterBase>
  );
};
