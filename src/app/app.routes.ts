import { Routes } from '@angular/router';

import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [

    { path: 'home', component: UserComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
