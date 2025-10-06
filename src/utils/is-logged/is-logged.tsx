import { COOKIE_NAMES } from "@/cookie-names";
import { cookies } from "next/headers";

export async function isLogged() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_NAMES.ACCESS_TOKEN)?.value;

  return Boolean(accessToken);
}
