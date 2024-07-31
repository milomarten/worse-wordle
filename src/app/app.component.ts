import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordleLineComponent } from "./wordle-line/wordle-line.component";
import { WordleGridComponent } from "./wordle-grid/wordle-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordleLineComponent, WordleGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'worse-wordle';

  public log(item: any) {
    console.log(item);
  }
}
