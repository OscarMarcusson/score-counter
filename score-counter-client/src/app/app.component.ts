import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ScoreRowComponent } from './score-row/score-row.component';
import { MatchComponent, Player } from './match/match.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ScoreRowComponent, MatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'score-counter-client';

  players: Player[] = [
    { name: 'Mattias', score: 7 },
    { name: 'Pettersson', score: 3 },
    { name: 'Niko', score: -99 },
    { name: 'Oscar', score: 42 },
  ];
}
