import { ROUTES } from "@/app/routes";
import { COOKIE_NAMES } from "@/cookie-names";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export async function GET() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAMES.ACCESS_TOKEN);
  cookieStore.delete(COOKIE_NAMES.REFRESH_TOKEN);

  return redirect(ROUTES.signIn, RedirectType.push);
}
