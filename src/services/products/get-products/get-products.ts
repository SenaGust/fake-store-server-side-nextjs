interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

interface GetProductsResponse {
  products: Product[];
}

export async function getProducts() {
  const data = ["id", "title", "price", "rating", "thumbnail"];

  const selectQueryParam = data.join(",");

  const response = await fetch(
    `https://dummyjson.com/products?limit=12&select=${selectQueryParam}`
  );

  return (await response.json()) as GetProductsResponse;
}
