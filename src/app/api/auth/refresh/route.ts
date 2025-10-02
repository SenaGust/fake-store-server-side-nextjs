import { COOKIE_NAMES } from "@/cookie-names";
import { refreshToken } from "@/services/auth/refresh-token";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const refreshTokenFromCookie = cookieStore.get(
    COOKIE_NAMES.REFRESH_TOKEN
  )?.value;

  if (!refreshTokenFromCookie) {
    return NextResponse.json(
      { error: "Refresh token not found" },
      { status: 401 }
    );
  }

  const response = await refreshToken({
    refreshToken: refreshTokenFromCookie,
  });

  if (!response) {
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 401 }
    );
  }

  const { accessToken, refreshToken: newRefreshToken } = response;

  cookieStore.set(COOKIE_NAMES.ACCESS_TOKEN, accessToken);
  cookieStore.set(COOKIE_NAMES.REFRESH_TOKEN, newRefreshToken);

  return NextResponse.redirect("http://localhost:3000/design-system");
}
