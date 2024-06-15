import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
    selector: 'app-hero-links',
    standalone: true,
    imports: [LinkComponent],
    templateUrl: './hero-links.component.html',
    styleUrl: './hero-links.component.scss',
})
export class HeroLinksComponent {
    links = [
        {
            destination: 'https://devildestined.gumroad.com/',
            image: 'assets/img/devildestined-red.png',
            text: 'Shop Available Merch Now'
        },
        {
            destination:
                'https://open.spotify.com/album/7ptiUm49ewYMhAQtBhbMAV?si=YqTZCuj_TcOIawiW-s0FSg',
            image: 'assets/img/descent-cover.png',
            text: 'Descent - Album Out Now',
        },
        {
            destination:
                'https://open.spotify.com/album/3iOs9jwKFciOnOESjMin5U?si=llW4NukrTpe0LSPBG9XeWQ',
            image: 'assets/img/descent-deluxe-cover.png',
            text: 'Descent Deluxe Version Available',
        },
        {
            destination:
                'https://open.spotify.com/album/31bkhfaXJvo9vAiuUG6trg?si=b2k2-RKxRSuMeKLRXle1fw',
            image: 'assets/img/soul-sail-cover.png',
            text: 'Soul Sail - Single Out Now',
        },
    ];
}
