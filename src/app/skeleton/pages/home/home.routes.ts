import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../../guards/auth.guard';

export const homeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
    },
];
