import { ROUTES } from "@/app/routes";
import { Button } from "@/components/common/button";
import { TextInput } from "@/components/common/text-input";
import { PasswordInput } from "@/components/password-input/password-input";
import {
  ArrowRight,
  KeyMinimalisticSquare2,
  Letter,
  User,
} from "@solar-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function SignUp() {
  return (
    <div
      className={twMerge(
        "p-10 pt-17 pb-12 flex flex-col flex-1 justify-between h-full",
        "lg:w-[600px] lg:mx-auto lg:justify-around lg:gap-0"
      )}
    >
      <header className="flex flex-col gap-2 items-center mb-10">
        <Image src="/logo.svg" alt="Logo" width={64} height={48} />
        <h1 className="text-title-lg text-gray-500">Crie sua conta</h1>
        <p className="text-body-sm text-gray-300">
          Informe os seus dados pessoais e de acesso
        </p>
      </header>

      <main>
        <form className="flex flex-col gap-5">
          <TextInput
            label="Nome"
            type="text"
            placeholder="Seu nome completo"
            leftIcon={<User />}
          />

          <TextInput
            label="Telefone"
            type="text"
            placeholder="(00) 00000-0000"
            leftIcon={<Letter />}
          />

          <h2 className="text-title-sm text-gray-500 pt-5">Acesso</h2>

          <TextInput
            label="E-mail"
            type="text"
            placeholder="mail@exemplo.br"
            leftIcon={<Letter />}
          />

          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            leftIcon={<KeyMinimalisticSquare2 />}
          />

          <PasswordInput
            label="Confirmar senha"
            placeholder="Confirmar a senha"
            leftIcon={<KeyMinimalisticSquare2 />}
          />

          <Button
            type="submit"
            variant="solid"
            size="md"
            className="w-full justify-between mt-5"
          >
            Cadastrar
            <ArrowRight />
          </Button>
        </form>
      </main>

      <section className="row-end-0 flex flex-col gap-5 mt-24">
        <h2 className="text-body-md text-gray-300">Já tem uma conta?</h2>

        <Link href={ROUTES.signIn}>
          <Button
            size="md"
            variant="outline"
            className="w-full justify-between"
          >
            Acessar
            <ArrowRight />
          </Button>
        </Link>
      </section>
    </div>
  );
}
