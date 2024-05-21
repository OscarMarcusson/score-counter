import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, input } from '@angular/core';

@Component({
    selector: 'app-billiards-ball',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './billiards-ball.component.html',
    styleUrl: './billiards-ball.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BilliardsBallComponent {
    @Input()
    @HostBinding("style.width.px")
    @HostBinding("style.height.px")
    @HostBinding("style.fontSize.px")
    size: number = 20;

    @Input()
    number: number | undefined;

    @Input()
    colorFill: boolean = true;

    @Input()
    color: string | undefined;
}
