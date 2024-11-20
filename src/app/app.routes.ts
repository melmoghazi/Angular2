import { Routes } from '@angular/router';

import { ProjectStructureComponent } from './shared/components/project-structure/project-structure.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './features/login/login.component';
import { Login2Component } from './features/login2/login2.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'project-structure'
    },
    {
        path: 'project-structure',
        component: ProjectStructureComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login2',
        component: Login2Component
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
