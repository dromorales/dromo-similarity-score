import { commonPrefixLength } from "./commonPrefixLength";
import { calculateJaro } from "./calculateJaro";

export function jaroWinkler(s1: string, s2: string): number {
  const jaro = calculateJaro(s1, s2);
  const prefixLength = commonPrefixLength(s1, s2);
  const p = 0.1; // scaling factor

  return jaro + prefixLength * p * (1 - jaro);
}
