import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input()
  show: boolean = false;

  @HostBinding('class.minimize')
  private minimize: boolean = true;

  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['show']) {
      setTimeout(() => {
        const show = changes['show'].currentValue;
        this.minimize = !show;
        this.changeRef.detectChanges();
      });
    }
  }

//   close() {
//     this.show = false;
//     this.ngOnChanges({
//       show: {
//         currentValue: this.show,
//       },
//     } as any);
//     this.changeRef.detectChanges();
//   }
}
