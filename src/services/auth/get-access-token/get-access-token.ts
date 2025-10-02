interface GetAccessTokenProps {
  username: string;
  password: string;
}

interface GetAccessTokenResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  /** JWT accessToken (for backward compatibility) in response and cookies  */
  accessToken: string;
  /** refreshToken in response and cookies  */
  refreshToken: string;
}

export async function getAccessToken({
  username,
  password,
}: GetAccessTokenProps): Promise<GetAccessTokenResponse | null> {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 10,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
}
