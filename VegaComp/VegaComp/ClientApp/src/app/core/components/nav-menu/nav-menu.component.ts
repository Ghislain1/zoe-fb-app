import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  appUser: any;
  vehicles: any;

  constructor(private auth: AuthService) {

    this.appUser = {
      name: 'Ghislain',
      isAdmin: true
    }
  }
}
