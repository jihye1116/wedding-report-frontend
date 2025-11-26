import { cn } from "@/utils/cn";

interface ActionButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
  disabled?: boolean;
}

export const ActionButton = ({
  onClick,
  text = "확인",
  className,
  disabled = false,
}: ActionButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg bg-[#6DD4BD] p-2.5 pl-5 outline-black",
        {
          "bg-gray-300 cursor-not-allowed": disabled,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={cn(
          "text-sm leading-tight font-medium text-white",
          className,
        )}
      >
        {text}
      </span>
    </button>
  );
};
