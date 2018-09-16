import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full'},
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
]