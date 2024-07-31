export type LetterState = "not-present" | "present-wrong-place" | "present-right-place";

export type Letter = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"I"|"J"|"K"|"L"|"M"|"N"|"O"|"P"|"Q"|"R"|"S"|"T"|"U"|"V"|"W"|"X"|"Y"|"Z";

type AlphabetState = { [key in Letter]: LetterState }

export interface LetterGuess {
    letter: Letter,
    state: LetterState
}

export type WordGuess = LetterGuess[];

/**
 * createDummyGuess
word: string : WordGuess*/
export function createDummyGuess(word: string, states: Array<LetterState>): WordGuess {
    return states.map((state, idx) => {
        return {
            letter: word[idx] as Letter,
            state
        }
    });
}