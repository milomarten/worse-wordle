import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { WordleLineComponent } from '../wordle-line/wordle-line.component';
import { createDummyGuess, LetterState, WordGuess } from '../models/wordle-state';

@Component({
  selector: 'app-wordle-grid',
  standalone: true,
  imports: [WordleLineComponent],
  templateUrl: './wordle-grid.component.html',
  styleUrl: './wordle-grid.component.scss'
})
export class WordleGridComponent implements OnInit {
  @Input({ required: true })
  public length!: number;

  @Input({ required: true})
  public height!: number;

  guesses: Array<WordGuess> = [];

  ngOnInit(): void {
    this.guesses[0] = createDummyGuess("SNEAK", ["not-present", "not-present", "not-present", "present-right-place", "present-wrong-place"])
  }
}
