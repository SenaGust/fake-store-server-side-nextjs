import { Star } from "@solar-icons/react/ssr";
import { twMerge } from "tailwind-merge";

interface RatingsProps {
  rating?: number;
  maxRating?: number;
  className?: string;
}

export function Ratings({
  rating = 0,
  maxRating = 5,
  className,
}: RatingsProps) {
  const title = rating > 0 ? `NOTA • ${rating}/${maxRating}` : "NOTA";

  return (
    <div className={twMerge("flex flex-col align-start gap-2", className)}>
      <span className="text-body-md text-gray-300">{title}</span>

      <div className={twMerge("flex items-center gap-1")}>
        {Array.from({ length: maxRating }).map((_, index) => {
          const isFilled = index <= rating;

          return (
            <Star
              key={index}
              weight={isFilled ? "Bold" : "Outline"}
              size={28}
              className={twMerge(isFilled ? "text-blue-base" : "text-gray-100")}
            />
          );
        })}
      </div>
    </div>
  );
}
