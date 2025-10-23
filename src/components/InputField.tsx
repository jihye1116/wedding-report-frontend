"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string; // 폼 데이터의 키로 사용
  value: string; // 현재 입력 값
  onChange: (name: string, value: string) => void; // 값 변경 핸들러
  placeholder: string;
  onClick?: () => void; // 선택적으로 변경
}

export const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  onClick,
}: InputFieldProps) => {
  return (
    <div onClick={onClick} className="w-full outline-none">
      <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder}
          className="block grow py-1.5 pr-3 pl-1 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        />
      </div>
    );
  },
);

InputField.displayName = "InputField";
