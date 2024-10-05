import { jaroWinkler } from "./jaroWinkler.ts";

export default similarityScore;
function similarityScore(str1: string, str2: string): number {
  return jaroWinkler(str1, str2);
}
