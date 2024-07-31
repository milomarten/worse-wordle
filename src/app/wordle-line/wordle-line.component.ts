import { Component, Input } from '@angular/core';
import { WordGuess } from '../models/wordle-state';

@Component({
  selector: 'app-wordle-line',
  standalone: true,
  imports: [],
  templateUrl: './wordle-line.component.html',
  styleUrl: './wordle-line.component.scss'
})
export class WordleLineComponent {
  @Input({required: true})
  public results!: WordGuess
}
