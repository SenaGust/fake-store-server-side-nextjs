import { getUser } from "@/services/auth/get-user";
import { isLogged } from "@/utils/is-logged";
import Image from "next/image";
import { Link } from "@/components/common/link";
import { ROUTES } from "@/app/routes";
import { ArrowRight } from "@solar-icons/react/ssr";

export async function Account() {
  const isLoggedIn = await isLogged();

  if (!isLoggedIn) {
    return null;
  }

  const user = await getUser();

  return (
    <div className="p-4 flex items-center gap-4">
      <Image
        src={user.image}
        alt="Avatar"
        width={56}
        height={56}
        className="rounded-lg"
      />

      <div className="flex flex-col gap-1 justify-between">
        <h2 className="text-title-sm text-gray-500">Olá, {user.firstName}!</h2>

        <Link href={ROUTES.profile}>
          <p className="text-action-sm">Ver perfil</p>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
