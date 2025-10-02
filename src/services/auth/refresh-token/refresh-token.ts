interface RefreshTokenProps {
  /** old refreshToken */
  refreshToken: string;
}

interface RefreshTokenResponse {
  /** new accessToken (returned in both response and cookies) */
  accessToken: string;
  /** new refreshToken (returned in both response and cookies) */
  refreshToken: string;
}

export async function refreshToken({
  refreshToken,
}: RefreshTokenProps): Promise<RefreshTokenResponse | null> {
  try {
    const response = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: refreshToken,
        expiresInMins: 30,
      }),
    });

    return (await response.json()) as RefreshTokenResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
}
