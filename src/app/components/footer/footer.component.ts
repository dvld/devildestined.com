import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [LinkComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	currentYear = new Date().getFullYear();
}
