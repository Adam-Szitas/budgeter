import { Routes } from '@angular/router';
import { LoginComponent } from './skeleton/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'home',
        loadChildren: () => import('./skeleton/pages/home/home.routes').then((router) => router.homeRoutes),
    },
    {
        path: 'register',
        loadChildren: () => import('./skeleton/pages/register/register.routes').then((router) => router.registerRoutes),
    },
];
