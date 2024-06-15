import { Component } from '@angular/core';

@Component({
    selector: 'app-social-presence',
    standalone: true,
    imports: [],
    templateUrl: './social-presence.component.html',
    styleUrl: './social-presence.component.scss',
})
export class SocialPresenceComponent {
    socialLinks = [
        {
            url: 'https://www.facebook.com/DevilDestined/',
            iconSrc: '/assets/img/social-icons/facebook.png',
        },
        {
            url: 'https://www.instagram.com/devildestined/',
            iconSrc: '/assets/img/social-icons/instagram.png',
        },
        {
            url: 'https://x.com/devildestined',
            iconSrc: '/assets/img/social-icons/twitter.png',
        },
        {
            url: 'https://www.tiktok.com/@devildestined_official',
            iconSrc: '/assets/img/social-icons/tiktok.png',
        },
    ];
}
