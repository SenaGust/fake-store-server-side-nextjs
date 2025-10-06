import { ROUTES } from "@/app/routes";
import { Button } from "@/components/common/button";
import { SignInForm } from "@/components/pages/sign-in/sign-in-form";
import { ArrowRight } from "@solar-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function SignIn() {
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
        <SignInForm />
      </main>

      <section className="row-end-0 flex flex-col gap-5">
        <h2 className="text-body-md text-gray-300">Ainda não tem uma conta?</h2>

        <Link href={ROUTES.signUp}>
          <Button
            size="md"
            variant="outline"
            className="w-full justify-between"
          >
            Cadastrar
            <ArrowRight />
          </Button>
        </Link>
      </section>
    </div>
  );
}
