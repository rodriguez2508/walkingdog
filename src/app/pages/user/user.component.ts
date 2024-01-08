import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { ShowuserComponent } from '../../components/showuser/showuser.component';
import { ShowlistComponent } from '../../components/showlist/showlist.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavbarComponent, ShowuserComponent, ShowlistComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
