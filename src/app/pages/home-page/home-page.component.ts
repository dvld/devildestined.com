import { Component } from '@angular/core';
import {
	FooterComponent,
	HeroComponent,
	NavigationComponent,
	SocialPresenceComponent
} from 'components/';
import { HeroLinksComponent } from '../../components/hero-links/hero-links.component';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [HeroComponent, FooterComponent, NavigationComponent, SocialPresenceComponent, HeroLinksComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
