import { Button } from "@/components/common/button";
import { TextInput } from "@/components/common/text-input";
import { PasswordInput } from "@/components/password-input/password-input";
import {
  ArrowRight,
  Eye,
  KeyMinimalisticSquare2,
  Letter,
} from "@solar-icons/react/ssr";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Login() {
  return (
    <div
      className={twMerge(
        "p-10 pt-17 pb-12 flex flex-col flex-1 justify-between h-full gap-10",
        "lg:w-[600px] lg:mx-auto lg:justify-around lg:gap-0"
      )}
    >
      <header className="flex flex-col gap-2 items-center">
        <Image src="/logo.svg" alt="Logo" width={64} height={48} />
        <h1 className="text-title-lg text-gray-500">Acesse sua conta</h1>
        <p className="text-body-sm text-gray-300">
          Informe seu e-mail e senha para entrar
        </p>
      </header>

      <main>
        <form>
          <TextInput
            label="E-mail"
            type="text"
            placeholder="mail@exemplo.br"
            leftIcon={<Letter />}
            containerClassName="mb-5"
          />

          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            leftIcon={<KeyMinimalisticSquare2 />}
            containerClassName="mb-10"
          />

          <Button
            type="submit"
            variant="solid"
            size="md"
            className="w-full justify-between"
          >
            Login
            <ArrowRight />
          </Button>
        </form>
      </main>

      <section className="row-end-0 flex flex-col gap-5">
        <h2>Ainda não tem uma conta?</h2>
        <Button size="md" variant="outline" className="w-full justify-between">
          Cadastrar
          <ArrowRight />
        </Button>
      </section>
    </div>
  );
}
