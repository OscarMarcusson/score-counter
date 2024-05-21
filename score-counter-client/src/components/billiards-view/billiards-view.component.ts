import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, Input, HostBinding, HostListener } from "@angular/core";
import { BilliardsBallInformation } from "./data/BilliardsBallInformation";
import { BilliardsBallComponent } from "../billiards-ball/billiards-ball.component";
import { Monitor9Ball } from "./modes/monitor-9-ball";

@Component({
    selector: 'app-billiards-view',
    standalone: true,
    templateUrl: './billiards-view.component.html',
    styleUrl: './billiards-view.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BilliardsBallComponent
    ]
})
export class BilliardsViewComponent {
    @Input()
    edgeMarginPercentage: number = 5;

    @Input()
    rows: (BilliardsBallInformation | undefined)[][] = Monitor9Ball.layout;

    width: number = 0;
    height: number = 0;
    size: number = 0;
    horizontal: boolean = false;

    @HostBinding("class.show-areas")
    showAreas: boolean = false;

    constructor() {
        this.onResize();
    }

    @HostListener('window:resize')
    onResize() {
        const min = Math.min(window.innerHeight, window.innerWidth);
        const max = Math.max(window.innerHeight, window.innerWidth);

        const margin = ((100 - this.edgeMarginPercentage) * 0.01);
        this.width = Math.round(Math.min(min, max * 0.5) * margin);
        this.height = this.width * 2;
        this.size = Math.min(this.width, this.height) * 0.01;

        this.horizontal = window.innerHeight < window.innerWidth;
        if (this.horizontal) {
            const t = this.height;
            this.height = this.width;
            this.width = t;
        }
    }
}
