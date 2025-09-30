import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md";
  children: ReactNode;
}

const buttonStyles = tv({
  base: twMerge(
    "rounded-lg px-4 flex items-center gap-2",
    "cursor-pointer select-none",
    "[&_svg]:size-6",
    "active:shadow-md",
    "hover:opacity-90 transition-opacity duration-200"
  ),
  variants: {
    variant: {
      solid: "bg-purple-base text-white",
      outline: "border border-purple-base border-1 text-purple-base",
    },
    size: {
      sm: "h-10 text-action-sm",
      md: "h-12 text-action-md",
    },
  },
  defaultVariants: {
    size: "md",
    color: "solid",
  },
});

function Button({ children, variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        buttonStyles({ variant, size }),
        className,
        // TODO: understand why this is needed
        variant === "outline" ? "text-purple-base" : "text-white"
      )}
    >
      {children}
    </button>
  );
}

export { Button };
