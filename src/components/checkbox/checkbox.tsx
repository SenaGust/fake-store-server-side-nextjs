import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends ComponentProps<"input"> {
  label: string;
  containerClassName?: string;
}

export function Checkbox({
  label,
  className,
  containerClassName,
  ...props
}: CheckboxProps) {
  return (
    <label className={twMerge("flex items-center gap-2", containerClassName)}>
      <input
        {...props}
        type="checkbox"
        className={twMerge("accent-purple-base size-5", className)}
      />
      <span className="text-body-md text-gray-400 select-none">{label}</span>
    </label>
  );
}
