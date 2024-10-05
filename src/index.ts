export default similarityScore;
function similarityScore(str1: string, str2: string): number {
  return jaroWinkler(str1, str2);
}

function jaroWinkler(s1: string, s2: string): number {
  const jaro = calculateJaro(s1, s2);
  const prefixLength = commonPrefixLength(s1, s2);
  const p = 0.1; // scaling factor

  return jaro + prefixLength * p * (1 - jaro);
}

function calculateJaro(s1: string, s2: string): number {
  if (s1 === s2) return 1.0;

  const len1 = s1.length;
  const len2 = s2.length;

  const maxDist = Math.floor(Math.max(len1, len2) / 2) - 1;
  const match1 = new Array(len1).fill(false);
  const match2 = new Array(len2).fill(false);

  let matches = 0;
  let transpositions = 0;

  for (let i = 0; i < len1; i++) {
    const start = Math.max(0, i - maxDist);
    const end = Math.min(i + maxDist + 1, len2);

    for (let j = start; j < end; j++) {
      if (match2[j]) continue;
      if (s1[i] !== s2[j]) continue;
      match1[i] = true;
      match2[j] = true;
      matches++;
      break;
    }
  }

  if (matches === 0) return 0.0;

  let k = 0;
  for (let i = 0; i < len1; i++) {
    if (!match1[i]) continue;
    while (!match2[k]) k++;
    if (s1[i] !== s2[k]) transpositions++;
    k++;
  }

  return (
    (matches / len1 +
      matches / len2 +
      (matches - transpositions / 2) / matches) /
    3.0
  );
}

function commonPrefixLength(s1: string, s2: string): number {
  const maxLength = Math.min(s1.length, s2.length, 4);
  for (let i = 0; i < maxLength; i++) {
    if (s1[i] !== s2[i]) return i;
  }
  return maxLength;
}
