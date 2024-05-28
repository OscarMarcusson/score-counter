import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BilliardsViewComponent } from '../../components/billiards-view/billiards-view.component';

@Component({
    selector: 'app-monitor-9-ball-page',
    standalone: true,
    imports: [
        CommonModule,
        BilliardsViewComponent,
    ],
    templateUrl: './monitor-9-ball-page.component.html',
    styleUrl: './monitor-9-ball-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Monitor9BallPageComponent { }
