"use client";

import { ComponentProps, useState } from "react";
import { TextInput } from "../common/text-input/text-input";
import { Eye, EyeClosed } from "@solar-icons/react/ssr";

export function PasswordInput(props: ComponentProps<typeof TextInput>) {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClick = () => {
    setShowPassword((state) => !state);
  };

  return (
    <TextInput
      {...props}
      type={showPassword ? "text" : "password"}
      rightIcon={
        showPassword ? (
          <Eye onClick={handleOnClick} className="cursor-pointer" />
        ) : (
          <EyeClosed onClick={handleOnClick} className="cursor-pointer" />
        )
      }
    />
  );
}
