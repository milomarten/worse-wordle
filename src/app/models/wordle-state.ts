export type LetterState = "not-present" | "present-wrong-place" | "present-right-place";

export type Letter = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"I"|"J"|"K"|"L"|"M"|"N"|"O"|"P"|"Q"|"R"|"S"|"T"|"U"|"V"|"W"|"X"|"Y"|"Z";

export type AlphabetState = { [key in Letter]: LetterState | "unknown" }

export interface LetterGuess {
    letter: Letter,
    state: LetterState
}

export type WordGuess = LetterGuess[];

export function defaultAlphabetState(): AlphabetState {
    return {
        "A": "unknown",
        "B": "unknown",
        "C": "unknown",
        "D": "unknown",
        "E": "unknown",
        "F": "unknown",
        "G": "unknown",
        "H": "unknown",
        "I": "unknown",
        "J": "unknown",
        "K": "unknown",
        "L": "unknown",
        "M": "unknown",
        "N": "unknown",
        "O": "unknown",
        "P": "unknown",
        "Q": "unknown",
        "R": "unknown",
        "S": "unknown",
        "T": "unknown",
        "U": "unknown",
        "V": "unknown",
        "W": "unknown",
        "X": "unknown",
        "Y": "unknown",
        "Z": "unknown"
    };
}