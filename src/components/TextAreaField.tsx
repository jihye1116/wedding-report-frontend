"use client";

interface TextAreaFieldProps {
  name: string; // 폼 데이터의 키로 사용
  value: string; // 현재 입력 값
  onChange: (name: string, value: string) => void; // 값 변경 핸들러
  placeholder: string;
  rows?: number; // 기본 행 수 설정
  onClick?: () => void; // 선택적으로 변경
}

export const TextAreaField = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 8, // 기본값 3행
  onClick,
}: TextAreaFieldProps) => {
  return (
    <div onClick={onClick} className="w-full rounded-xl outline-none">
      <div className="flex items-start rounded-md pl-4 outline-1 -outline-offset-1 outline-gray-300 has-[textarea:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-black">
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="block w-full resize-none py-5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
        />
      </div>
    </div>
  );
};
