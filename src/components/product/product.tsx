import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Ratings } from "../common/ratings";

interface ProductProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  className?: string;
}

export function Product({
  title,
  rating,
  price,
  image,
  className,
}: ProductProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-1 p-1 rounded-lg bg-white h-full w-fit",
        className
      )}
    >
      <div className="relative max-w-fit">
        <div className="absolute z-10 top-0 right-0 rounded-bl-lg bg-white p-1">
          <Ratings rating={rating} readOnly />
        </div>

        <Image
          src={image}
          alt={title}
          width={148}
          height={96}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-1 p-1">
        <span className="text-body-sm text-gray-400">{title}</span>

        <span className="text-label-sm text-gray-500">
          R$ <span className="text-title-xs">{formatPrice(price)}</span>
        </span>
      </div>
    </div>
  );
}
