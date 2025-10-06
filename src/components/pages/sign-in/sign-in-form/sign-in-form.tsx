"use client";

import { signInAction } from "@/app/(unprotected-routes)/sign-in/action";
import { Button } from "@/components/common/button";
import { TextInput } from "@/components/common/text-input";
import { PasswordInput } from "@/components/password-input/password-input";
import {
  ArrowRight,
  KeyMinimalisticSquare2,
  Letter,
} from "@solar-icons/react/ssr";
import { useActionState } from "react";

export function SignInForm() {
  const [data, formAction, isPending] = useActionState(signInAction, {
    hasError: false,
    error: "",
    username: "",
    password: "",
  });

  return (
    <form action={formAction}>
      <TextInput
        name="username"
        label="Nome do usuário"
        type="text"
        defaultValue={data.username}
        placeholder="Digite seu nome de usuário"
        leftIcon={<Letter />}
        hasError={data.hasError}
        helperText={data.error}
        containerClassName="mb-5"
      />

      <PasswordInput
        name="password"
        label="Senha"
        placeholder="Sua senha"
        defaultValue={data.password}
        leftIcon={<KeyMinimalisticSquare2 />}
        containerClassName="mb-10"
        hasError={data.hasError}
        helperText={data.error}
      />

      <Button
        type="submit"
        variant="solid"
        size="md"
        className="w-full justify-between"
        disabled={isPending}
      >
        Login
        <ArrowRight />
      </Button>
    </form>
  );
}
