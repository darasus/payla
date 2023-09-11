import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() {
  const vc = process.env.VERCEL_URL

  if (vc) return `https://${vc}`

  return `http://localhost:3000`
}
