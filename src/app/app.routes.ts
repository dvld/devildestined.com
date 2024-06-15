import { Routes } from '@angular/router';
import {
	BioPageComponent,
	HomePageComponent,
	RegistrationPageComponent,
	SongsPageComponent,
} from './pages';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'bio', component: BioPageComponent },
	{ path: 'auth', component: RegistrationPageComponent },
	{ path: 'songs', component: SongsPageComponent },
];
