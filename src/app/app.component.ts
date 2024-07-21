import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordleLineComponent } from "./wordle-line/wordle-line.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordleLineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'worse-wordle';
}
