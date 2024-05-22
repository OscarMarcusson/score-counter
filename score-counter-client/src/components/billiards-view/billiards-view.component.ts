import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, Input, HostBinding, HostListener, SimpleChanges, Output, EventEmitter, viewChild, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
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
    ],
})
export class BilliardsViewComponent {
    @Input()
    edgeMarginPercentage: number = 10;

    @Input()
    rows: (BilliardsBallInformation | undefined)[][] = Monitor9Ball.layout;

    @Output()
    onSetBall = new EventEmitter<BilliardsBallEvent>();

    width: number = 0;
    height: number = 0;
    size: number = 0;
    horizontal: boolean = false;
    ballDataRows: BilliardsBallModel[][] = [];
    ballRecord: Record<number, BilliardsBallModel> = {};
    currentBall: BilliardsBallModel | undefined;

    @HostBinding("class.mouse-over-table")
    mouseOverTable: boolean = false;

    @HostBinding("class.show-areas")
    showAreas: boolean = false;

    @ViewChild("outside")
    outsideRef: ElementRef = null!;

    constructor(private changeDetectionRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.ngOnChanges(<any>{
            rows: {
                currentValue: this.rows,
                firstChange: true,
                previousValue: undefined,
            }
        })
    }

    ngAfterViewInit() {
        this.onResize();
        // Angular, for whatever reason, does not detect changes automaticaly here...
        this.changeDetectionRef.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["rows"]) {
            const newRows = changes["rows"].currentValue;
            console.log(newRows);
            this.ballDataRows = [];
            this.ballRecord = {};

            if (newRows) {
                for (let rowId = 0; rowId < newRows.length; rowId++) {
                    const rowArray: BilliardsBallModel[] = [];
                    for (let ballId = 0; ballId < newRows[rowId].length; ballId++) {
                        const ball = {
                            ball: newRows[rowId][ballId],
                            enabled: true,
                        };
                        this.ballRecord[ball.ball.number] = ball;
                        rowArray.push(ball);
                    }
                    this.ballDataRows.push(rowArray);
                }
            }
        }
    }

    @HostListener('window:resize')
    onResize() {
        if (!this.outsideRef) return;
        const hostSizeElement = this.outsideRef.nativeElement as HTMLElement;
        const availableWidth = hostSizeElement.clientWidth;
        const availableHeight = hostSizeElement.clientHeight;

        const min = Math.min(availableHeight, availableWidth);
        const max = Math.max(availableHeight, availableWidth);

        const margin = ((100 - this.edgeMarginPercentage) * 0.01);
        this.width = Math.round(Math.min(min, max * 0.5) * margin);
        this.height = this.width * 2;
        this.size = Math.min(this.width, this.height) * 0.01;

        this.horizontal = availableHeight < availableWidth;
        if (this.horizontal) {
            const t = this.height;
            this.height = this.width;
            this.width = t;
        }
    }

    onClickBall(ball: BilliardsBallModel) {
        if (!ball?.ball) return;

        // ball.enabled = false;
        // console.log(ball);
        this.showAreas = true;
        this.currentBall = ball;
    }

    onClickTable() {
        if (!this.showAreas) return;

        this.showAreas = false;
        this.currentBall = undefined;
        console.warn("inside");
    }

    onClickOutside() {
        if (!this.showAreas) return;

        this.showAreas = false;
        this.currentBall = undefined;
        console.warn("outside");
    }

    onClickHole() {
        if (!this.showAreas) return;

        this.showAreas = false;
        if (this.currentBall) {
            this.setBall(this.currentBall);
            this.currentBall = undefined;
        }
    }

    setBall(ball: BilliardsBallModel) {
        Monitor9Ball.onSetBall(ball, this.ballRecord);
    }
}

export interface BilliardsBallModel {
    ball: BilliardsBallInformation | undefined;
    enabled: boolean;
}

export interface BilliardsBallEvent {
    ball: BilliardsBallModel;
    balls: Record<number, BilliardsBallModel>;
}