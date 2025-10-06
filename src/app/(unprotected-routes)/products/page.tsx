import { Account } from "@/components/account";
import { Button } from "@/components/common/button";
import { TextInput } from "@/components/common/text-input";
import { ProductList } from "@/components/pages/products/product-list";
import { ProductListLoading } from "@/components/pages/products/product-list-loading";
import { Magnifer, Filter } from "@solar-icons/react/ssr";
import { Suspense } from "react";

export default function Products() {
  return (
    <div className="p-4 bg-background">
      <Account />

      <main className="flex flex-col gap-4">
        <h2 className="text-title-sm text-gray-500">Explore produtos</h2>

        <div className="flex items-end justify-between w-full gap-1">
          <TextInput
            placeholder="Pesquisar"
            name="search"
            leftIcon={<Magnifer />}
            containerClassName="w-full"
          />

          <Button variant="outline" size="sm">
            <Filter />
          </Button>
        </div>
        <Suspense fallback={<ProductListLoading />}>
          <ProductList />
        </Suspense>
      </main>
    </div>
  );
}
