"use server";
import { ROUTES } from "@/app/routes";
import { COOKIE_NAMES } from "@/cookie-names";
import { getAccessToken } from "@/services/auth/get-access-token";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import z from "zod";

const signInSchema = z.object({
  username: z.string().min(1, "Usuário inválido"),
  password: z.string().min(8, "Senha inválida"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export async function signInAction(_: SignInFormData, formData: FormData) {
  const parsed = signInSchema.safeParse({
    username: String(formData.get("username")),
    password: String(formData.get("password")),
  });

  if (parsed.success) {
    const response = await getAccessToken({
      username: parsed.data.username,
      password: parsed.data.password,
    });

    if (!response || !response.accessToken || !response.refreshToken) {
      return {
        hasError: true,
        error: "Usuário ou senha inválidos",
        username: parsed.data.username,
        password: parsed.data.password,
      };
    }

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAMES.ACCESS_TOKEN, response.accessToken);
    cookieStore.set(COOKIE_NAMES.REFRESH_TOKEN, response.refreshToken);

    redirect(ROUTES.products, RedirectType.push);
  }

  return {
    hasError: true,
    error: "Usuário ou senha inválidos",
    username: String(formData.get("username")),
    password: String(formData.get("password")),
  };
}
