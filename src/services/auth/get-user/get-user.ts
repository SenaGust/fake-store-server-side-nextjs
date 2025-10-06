import { COOKIE_NAMES } from "@/cookie-names";
import { cookies } from "next/headers";

interface GetUserResponse {
  id: number;
  username: "emilys";
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  phone: string;
}

export async function getUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_NAMES.ACCESS_TOKEN)?.value;

  const response = await fetch("https://dummyjson.com/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = (await response.json()) as GetUserResponse;

  return data;
}
