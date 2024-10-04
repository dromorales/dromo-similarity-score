import { jaroWinkler } from "./jaroWinkler";

function similarityScore(str1: string, str2: string): number {
  return jaroWinkler(str1, str2);
}

export default similarityScore;
