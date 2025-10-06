import { ROUTES } from "@/app/routes";
import { Link } from "@/components/common/link";
import { TextInput } from "@/components/common/text-input";
import { getUser } from "@/services/auth/get-user";
import {
  ArrowLeft,
  Letter,
  Logout3,
  Phone,
  User,
} from "@solar-icons/react/ssr";
import Image from "next/image";

export default async function Profile() {
  const user = await getUser();

  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <Link href={ROUTES.products}>
          <ArrowLeft /> Voltar
        </Link>

        <Link
          href={ROUTES.logout}
          className="text-danger hover:text-danger-dark"
        >
          <Logout3 /> Sair
        </Link>
      </header>

      <main className="p-8 flex flex-col items-center gap-8 w-full">
        <Image
          src={user.image}
          alt={user.firstName}
          width={100}
          height={100}
          className="rounded-lg"
        />

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-title-sm text-gray-500">Dados pessoais</h2>

          <TextInput
            label="Nome"
            value={user.firstName}
            leftIcon={<User />}
            readOnly
          />

          <TextInput
            label="Telefone"
            value={user.phone}
            leftIcon={<Phone />}
            readOnly
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-title-sm text-gray-500">Acesso</h2>
          <TextInput
            label="Nome de usuário"
            value={user.username}
            leftIcon={<User />}
            readOnly
          />

          <TextInput
            label="E-mail"
            value={user.email}
            leftIcon={<Letter />}
            readOnly
          />
        </div>
      </main>
    </div>
  );
}
