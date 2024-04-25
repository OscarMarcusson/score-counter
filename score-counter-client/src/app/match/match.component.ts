import { Component, Input } from '@angular/core';
import { ScoreRowComponent } from '../score-row/score-row.component';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-match',
    standalone: true,
    templateUrl: './match.component.html',
    styleUrl: './match.component.scss',
    imports: [ScoreRowComponent, ButtonComponent]
})
export class MatchComponent {
  @Input() players: Player[] = [];
}



export interface Player {
  name: string;
  score: number;
}
