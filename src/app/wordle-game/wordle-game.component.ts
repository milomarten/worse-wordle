import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlphabetState, defaultAlphabetState, Letter, WordGuess } from '../models/wordle-state';
import { WordleGridComponent } from "../wordle-grid/wordle-grid.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WordBankService } from '../word-bank.service';

const NOT_ALPHABETIC = /[^A-Z]/g;

@Component({
  selector: 'app-wordle-game',
  standalone: true,
  imports: [WordleGridComponent, FormsModule, CommonModule],
  templateUrl: './wordle-game.component.html',
  styleUrl: './wordle-game.component.scss'
})
export class WordleGameComponent {
  @Input()
  public maxGuesses: number | undefined;

  @Output()
  public onComplete: EventEmitter<void> = new EventEmitter();

  @Output()
  public onFailure: EventEmitter<void> = new EventEmitter();

  @Output()
  public onGuess: EventEmitter<WordGuess> = new EventEmitter();

  guesses: Array<WordGuess> = [];
  answer: string = "";
  _currentGuess: string = "";
  alphabetState: AlphabetState = defaultAlphabetState();

  finished = false;

  public constructor(private wordBankService: WordBankService) {
    this.answer = wordBankService.getWord();
  }

  get currentGuess() {
    return this._currentGuess;
  }
  set currentGuess(value: string) {
    this._currentGuess = value.toUpperCase();
  }

  get alphabetStateByLetter() {
    return Object.entries(this.alphabetState);
  }

  submitGuess() {
    var analysis = this.analyzeGuess(this.currentGuess);
    this.guesses.push(analysis);
    this.currentGuess = "";

    this.onGuess.emit(analysis);
    analysis.forEach(letter => {
      const existing = this.alphabetState[letter.letter]
      if (existing == "unknown" || existing == "not-present") {
        this.alphabetState[letter.letter] = letter.state;
      } else if (letter.state == "present-right-place") {
        this.alphabetState[letter.letter] = letter.state;
      }
    })

    if (analysis.every(g => g.state == "present-right-place")) {
      this.onComplete.emit()
      this.finished = true;
    } else if (this.maxGuesses && this.guesses.length >= this.maxGuesses) {
      this.onFailure.emit()
      this.finished = true;
    }
  }

  onKeyEnter(event: KeyboardEvent): boolean {
    return !!event.key.match(/[A-Z]/i);
  }

  analyzeGuess(guess: string): WordGuess {
    const letterMap = new Counter(this.answer);
    const guessAnalysis: WordGuess = [];

    for (let idx = 0; idx < guess.length; idx++) {
      const guessLetter = guess.charAt(idx);
      if (this.answer.charAt(idx) == guessLetter) {
        letterMap.decrement(guessLetter); // No check required, implicit guarantee that it's present here
        guessAnalysis[idx] = {
          letter: guessLetter as Letter,
          state: "present-right-place"
        }
      }
    }

    for (let idx = 0; idx < guess.length; idx++) {
      const guessLetter = guess.charAt(idx);
      if (letterMap.remaining(guessLetter)) {
        letterMap.decrement(guessLetter);
        guessAnalysis[idx] = {
          letter: guessLetter as Letter,
          state: "present-wrong-place"
        }
      }
    }

    for (let idx = 0; idx < guess.length; idx++) {
      if (!guessAnalysis[idx]) {
        guessAnalysis[idx] = {
          letter: guess.charAt(idx) as Letter,
          state: "not-present"
        }
      }
    }

    return guessAnalysis;
  }
}

class Counter {
  backing: Map<string, number>;

  constructor(word: string) {
    this.backing = new Map();
    word.split("")
    .forEach((letter) => {
      this.increment(letter)
    })
  }

  public remaining(key: string): boolean {
    return !!this.backing.get(key);
  }

  increment(key: string) {
    if (this.remaining(key)) {
      this.backing.set(key, this.backing.get(key)! + 1);
    } else {
      this.backing.set(key, 1);
    }
  }

  public decrement(key: string) {
    if (this.remaining(key)) {
      this.backing.set(key, this.backing.get(key)! - 1);
    }
  }
}