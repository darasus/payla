export function formatCents(
  cents: number,
  currency: "USD" | "EUR" | "GBP" = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(cents / 100)
}
