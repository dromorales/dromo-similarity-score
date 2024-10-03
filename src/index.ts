import { jaroWinkler } from "./jaroWinkler";

export default similarityScore

function similarityScore(str1: string, str2: string): number {
  return jaroWinkler(str1, str2);
}