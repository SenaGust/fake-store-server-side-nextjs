import { Menu } from "@/components/menu";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Menu />
    </>
  );
}
