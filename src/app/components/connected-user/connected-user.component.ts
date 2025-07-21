import { Component, Input } from '@angular/core';
import { User } from '../../Models/user.model';

@Component({
  selector: 'app-connected-user',
  standalone: false,
  templateUrl: './connected-user.component.html',
  styleUrl: './connected-user.component.css'
})
export class ConnectedUserComponent {
  @Input() user: User = new User();
}
