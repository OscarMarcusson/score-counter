import { Routes } from '@angular/router';
import { Monitor9BallPageComponent } from '../pages/monitor-9-ball-page/monitor-9-ball-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { FrontPageComponent } from '../pages/front-page/front-page.component';

export const routes: Routes = [
    {
        path: "",
        component: FrontPageComponent,
    },
    {
        path: "monitor-9-ball",
        component: Monitor9BallPageComponent,
    },
    {
        path: "**",
        component: NotFoundPageComponent,
    }
];
