
export function commonPrefixLength(s1: string, s2: string): number {
  const maxLength = Math.min(s1.length, s2.length, 4);
  for (let i = 0; i < maxLength; i++) {
    if (s1[i] !== s2[i]) return i;
  }
  return maxLength;
}
