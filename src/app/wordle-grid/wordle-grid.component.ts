import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wordle-grid',
  standalone: true,
  imports: [],
  templateUrl: './wordle-grid.component.html',
  styleUrl: './wordle-grid.component.scss'
})
export class WordleGridComponent {
  @Input({ required: true })
  public word!: string;


  public get {
    return this.word.length;
  }
}
