import { Component } from '@angular/core';
import {
	FooterComponent,
	HeroComponent,
	NavigationComponent,
} from 'components/';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [HeroComponent, FooterComponent, NavigationComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
