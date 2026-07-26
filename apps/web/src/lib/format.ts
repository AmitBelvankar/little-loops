export function formatPrice(price: number | null): string {
  if (price === null) return "Enquire for price";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
