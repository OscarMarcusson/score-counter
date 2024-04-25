import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() separator: boolean = false;
  @HostBinding('class.icon')
  @Input() icon: boolean = false;
}
