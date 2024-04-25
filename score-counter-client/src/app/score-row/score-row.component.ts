import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-score-row',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './score-row.component.html',
  styleUrl: './score-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreRowComponent {
  @Input() name: string = '';
  @Input() score: number = 0;
  @Input() highlight: boolean = false;
}
