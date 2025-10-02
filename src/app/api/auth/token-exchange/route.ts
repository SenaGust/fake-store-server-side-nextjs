import { COOKIE_NAMES } from "@/cookie-names";
import { getAccessToken } from "@/services/auth/get-access-token";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getAccessToken({
    username: "emilys",
    password: "emilyspass",
  });

  console.log({ response });

  if (!response) {
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  }

  const cookieStore = await cookies();
  const { accessToken, refreshToken } = response;

  cookieStore.set(COOKIE_NAMES.ACCESS_TOKEN, accessToken);
  cookieStore.set(COOKIE_NAMES.REFRESH_TOKEN, refreshToken);

  return NextResponse.redirect("http://localhost:3000/design-system");
}
