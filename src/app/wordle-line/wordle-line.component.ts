import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wordle-line',
  standalone: true,
  imports: [],
  templateUrl: './wordle-line.component.html',
  styleUrl: './wordle-line.component.scss'
})
export class WordleLineComponent {
  public word = "PABST";
}
