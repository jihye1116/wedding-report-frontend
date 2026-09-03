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
        "flex items-center gap-2 rounded-lg py-2.5 px-5 outline-black",
        disabled
          ? "bg-gray-300 cursor-not-allowed opacity-60"
          : "bg-brand cursor-pointer",
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
