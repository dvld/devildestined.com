import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link',
    standalone: true,
    imports: [],
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
})
export class LinkComponent {
    @Input() link: string = '/';
    @Input() imageSrc: string = '';
    @Input() text: string = '';
}
