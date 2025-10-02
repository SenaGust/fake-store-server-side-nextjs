import { redirect } from "next/navigation";
import { ROUTES } from "../routes";
import { cookies } from "next/headers";
import { COOKIE_NAMES } from "@/cookie-names";

export default async function ProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_NAMES.ACCESS_TOKEN)?.value;

  if (!accessToken) {
    console.log("Redirecting to sign in", { accessToken });
    return redirect(ROUTES.signIn);
  }

  return <>{children}</>;
}
