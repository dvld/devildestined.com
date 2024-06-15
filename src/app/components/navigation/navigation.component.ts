import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
