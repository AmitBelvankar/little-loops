// .trim() guards against trailing whitespace/newlines from pasting values into
// a dashboard env-var field (a real, common cause of "invalid" values that look
// correct — Vercel's build once failed here with the exact string "2025-01-01").
export const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01").trim();

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
