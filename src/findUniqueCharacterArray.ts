import { findFirstUniqueLetter } from "./findFirstUniqueLetter";

export function findUniqueCharacterArray(text: string): string {
    const words = text.split(' ');
    const uniqueChars: string[] = [];

    for (const word of words) {
        const count: { [key: string]: number } = {};

        for (const char of word) {
            count[char] = (count[char] || 0) + 1;
        }

        for (const char of word) {
            if (count[char] === 1) {
                uniqueChars.push(char);
                break;
            }
        }
    }

    const firstUniqueLetter = findFirstUniqueLetter(uniqueChars);

    return firstUniqueLetter || "No unique letters found";
}

