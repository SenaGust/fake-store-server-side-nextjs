import { Product } from "@/components/product";
import { getProducts } from "@/services/products/get-products";
import { twMerge } from "tailwind-merge";

interface ProductListProps {
  className?: string;
}

export async function ProductList({ className }: ProductListProps) {
  const { products } = await getProducts();

  return (
    <div
      className={twMerge(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2",
        className
      )}
    >
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.thumbnail}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}
