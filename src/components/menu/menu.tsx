"use client";
import { ROUTES } from "@/app/routes";
import { Link } from "../common/link";
import { twMerge } from "tailwind-merge";
import { CartLarge, Clipboard, Shop } from "@solar-icons/react/ssr";
import { usePathname } from "next/navigation";

interface MenuProps {
  className?: string;
}

const paths = [
  { label: "Produtos", icon: Shop, path: ROUTES.products },
  { label: "Pedidos", icon: Clipboard, path: ROUTES.orders },
  { label: "Carrinho", icon: CartLarge, path: ROUTES.cart },
];

export function Menu({ className }: MenuProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={twMerge("fixed bottom-0 left-0 right-0", className)}>
      <ul className="flex justify-around items-center bg-white p-4 shadow-[0_-1px_10px_rgba(0,0,0,0.3)]">
        {paths.map(({ path, icon: Icon, label }) => (
          <li key={path}>
            <Link
              href={path}
              className={twMerge(
                "flex-col items-center justify-center",
                isActive(path) ? "text-purple-base" : "text-gray-100"
              )}
            >
              <Icon size={20} />

              <p className="text-label-sm uppercase">{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
