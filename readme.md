# Similarity Score

## Overview

This TypeScript implementation provides a function to compare the similarity between two strings using the Jaro-Winkler distance algorithm. The Jaro-Winkler distance is a measure of edit distance between two sequences, particularly well-suited for short strings such as person names.

## Features

- Calculates similarity score between two strings
- Returns a value between 0 (completely different) and 1 (identical)
- Gives more weight to strings that match from the beginning
- Handles strings of different lengths and empty strings

## Installation

1. Run `npm i dromo-similarity-score`
2. Import into file: `import similarityScore from 'dromo-similarity-score'`

## Usage

```typescript
import { compareSimilarity } from "./string-similarity";

const similarity = compareSimilarity("hello", "hallo");
console.log(similarity); // Outputs a number between 0 and 1
```
