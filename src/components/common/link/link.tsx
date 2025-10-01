import NextLink from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Link({
  className,
  children,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={twMerge(
        "inline-flex items-center gap-1",
        "text-purple-base",
        "transition-colors duration-200",
        "hover:text-purple-dark hover:underline",
        "[&_svg]:size-5",
        className
      )}
    >
      {children}
    </NextLink>
  );
}
