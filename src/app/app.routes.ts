import { Routes } from '@angular/router';
import { LayoutComponent } from './@core/layout/layout.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./@core/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Iniciar sesión',
    },
    {
        path: 'register',
        loadComponent: () => import('./@core/auth/register/register.component').then(m => m.RegisterComponent),
        title: 'Registrarse',
    },
    {
        path: '',
        component: LayoutComponent,
        children: [

        ]
    }
];
