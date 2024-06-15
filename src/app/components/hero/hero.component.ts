import { Component } from '@angular/core';

@Component({
	selector: 'app-hero',
	standalone: true,
	imports: [],
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.scss',
})
export class HeroComponent {
	imgSrc = '/assets/img/devildestined-portrait.jpeg';

	socialLinks = [
		{
			url: 'facebook.com',
			iconSrc: '/assets/img/social-icons/facebook.png',
		}, {
			url: 'instagram.com',
			iconSrc: '/assets/img/social-icons/instagram.png'
		}, {
			url: 'x.com',
			iconSrc: '/assets/img/social-icons/twitter.png'
		}, {
			url: 'tiktok.com',
			iconSrc: '/assets/img/social-icons/tiktok.png'
		}
	];
}
