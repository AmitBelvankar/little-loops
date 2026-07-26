// Hardcoded, not env-configurable: this is an internal Sanity API version
// constant, not something that legitimately differs between environments —
// making it an env var only added a way to paste it in wrong (which happened
// on Vercel: the exact same valid-looking string failed there, twice).
export const apiVersion = "2025-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T extends string | undefined>(v: T, errorMessage: string): string {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v.trim();
}
