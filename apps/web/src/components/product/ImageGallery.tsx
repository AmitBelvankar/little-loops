"use client";

import Image from "next/image";
import { useState } from "react";

import { urlForImage } from "@/sanity/image";
import type { Product } from "@/sanity/types";

/**
 * Tap-to-switch thumbnail strip, not an auto-rotating carousel — carousels
 * are a named anti-pattern (low engagement, most users never go past slide 1).
 * See design/design-tokens.md.
 */
export function ImageGallery({ images, productName }: { images: Product["images"]; productName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainImageUrl = urlForImage(images[activeIndex]).width(900).height(1125).fit("crop").url();

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-accent-muted/30">
        <Image
          src={mainImageUrl}
          alt={productName}
          fill
          sizes="(min-width: 1024px) 500px, 100vw"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => {
            const thumbUrl = urlForImage(image).width(120).height(150).fit("crop").url();
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1} of ${productName}`}
                aria-current={index === activeIndex}
                className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  index === activeIndex ? "border-accent" : "border-transparent"
                }`}
              >
                <Image src={thumbUrl} alt="" fill sizes="64px" className="object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
