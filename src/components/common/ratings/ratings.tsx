"use client";

import { Star } from "@solar-icons/react/ssr";
import { twMerge } from "tailwind-merge";

interface RatingsProps {
  rating?: number;
  maxRating?: number;
  className?: string;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
}

export function Ratings({
  rating = 0,
  maxRating = 5,
  onChange,
  className,
  readOnly,
}: RatingsProps) {
  if (readOnly) {
    return (
      <div
        className={twMerge("flex align-start items-center gap-1", className)}
      >
        <Star weight="Bold" size={12} className={"text-blue-base"} />

        <legend className="text-label-sm text-gray-400">
          <span className="text-title-xs">{rating}</span> / {maxRating}
        </legend>
      </div>
    );
  }

  const title = rating > 0 ? `NOTA • ${rating}/${maxRating}` : "NOTA";

  return (
    <div className={twMerge("flex flex-col align-start gap-3", className)}>
      <legend className="text-body-md text-gray-300">{title}</legend>

      <div className={twMerge("flex items-center gap-1")}>
        {Array.from({ length: maxRating }).map((_, index) => {
          const isFilled = index <= rating;
          const value = index + 1;

          return (
            <label key={index} className="cursor-pointer">
              <input
                className="sr-only"
                type="radio"
                name="rating"
                aria-label={`Nota ${value}`}
                value={value}
                onChange={() => onChange?.(value)}
              />

              <Star
                weight={isFilled ? "Bold" : "Outline"}
                size={28}
                className={twMerge(
                  isFilled ? "text-blue-base" : "text-gray-100"
                )}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
