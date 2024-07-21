import { Optional } from "@angular/core";

enum LetterState {
    Unknown,
    NotPresent,
    PresentWrongPlace,
    PresentRightPlace
}

type Letter = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"I"|"J"|"K"|"L"|"M"|"N"|"O"|"P"|"Q"|"R"|"S"|"T"|"U"|"V"|"W"|"X"|"Y"|"Z";

type AlphabetState = { [key in Letter]: LetterState }