import { InfoCircle } from "@solar-icons/react/ssr";
import { ComponentProps, ReactNode, useId } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends ComponentProps<"input"> {
  label?: string;
  containerClassName?: string;
  hasError?: boolean;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function TextInput({
  id,
  label,
  containerClassName,
  hasError,
  helperText,
  leftIcon,
  rightIcon,
  className,
  ...props
}: TextInputProps) {
  const uniqueId = useId();
  const inputId = id ?? uniqueId;
  const hasLeftIcon = Boolean(leftIcon);
  const hasRightIcon = Boolean(rightIcon);

  const commonIconStyles = twMerge(
    "absolute top-0 bottom-0 flex items-center justify-center",
    "[&_svg]:size-6 [&_svg]:shrink-0"
  );

  return (
    <label className={twMerge("group flex flex-col gap-0", containerClassName)}>
      {label && (
        <span
          className={twMerge(
            "text-label-md text-gray-400 uppercase",
            "group-focus-within:text-purple-base"
          )}
        >
          {label}
        </span>
      )}

      <div className="relative">
        {hasLeftIcon && (
          <div
            className={twMerge(
              "left-0",
              commonIconStyles,
              "group-focus-within:text-purple-base",
              Boolean(props.value) && "text-purple-base",
              hasError && "text-danger"
            )}
          >
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          type="text"
          aria-invalid={hasError}
          aria-errormessage={helperText}
          className={twMerge(
            "peer w-full h-12 outline-none",
            "border-b border-gray-200",
            "placeholder:text-gray-200",
            hasLeftIcon && "pl-8",
            hasRightIcon && "pr-8",
            className
          )}
          {...props}
        />

        {hasRightIcon && (
          <div className={twMerge("right-0", commonIconStyles)}>
            {rightIcon}
          </div>
        )}
      </div>

      {hasError && (
        <span
          aria-describedby={inputId}
          className={twMerge(
            "flex items-center gap-1 mt-1 text-body-xs text-danger"
          )}
        >
          <InfoCircle />
          {helperText}
        </span>
      )}
    </label>
  );
}
