export function findFirstUniqueLetter(uniqueChars: string[]): string | null {
    const letterCount: { [key: string]: number } = {};

    for (const letter of uniqueChars) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    for (const letter of uniqueChars) {
        if (letterCount[letter] === 1) {
            return letter;
        }
    }

    return null;
}