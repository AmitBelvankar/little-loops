import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ImageGallery } from "@/components/product/ImageGallery";
import { WhatsAppButton } from "@/components/product/WhatsAppButton";
import { formatPrice } from "@/lib/format";
import { urlForImage } from "@/sanity/image";
import { getProductBySlug } from "@/sanity/queries";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found — Little Loops" };
  }

  const ogImage = urlForImage(product.images[0]).width(1200).height(630).fit("crop").url();

  return {
    title: `${product.name} — Little Loops`,
    description: product.description ?? `${product.name} — handmade crochet, Little Loops.`,
    openGraph: {
      title: product.name,
      description: product.description ?? undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 md:gap-12">
        <ImageGallery images={product.images} productName={product.name} />
        <div className="flex flex-col gap-4">
          {product.isNew && <Badge>New</Badge>}
          <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
          <p className="text-lg text-foreground/80">{formatPrice(product.price)}</p>
          {product.description && (
            <p className="text-foreground/70 whitespace-pre-line">{product.description}</p>
          )}
          <WhatsAppButton productName={product.name} className="mt-2 w-full sm:w-auto" />
        </div>
      </div>
    </Container>
  );
}
