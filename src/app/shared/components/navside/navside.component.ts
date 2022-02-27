import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppUser } from '../../models/app-user';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.scss']
})
export class NavsideComponent implements OnInit {
  navRoutes: any[] = [
    { name: 'Home', path: 'home', mobile: false, icon: 'home' },
    { name: 'Package', path: 'package', mobile: false, icon: 'packageGhislainIcon' }
    // { name: 'Termine', path: 'events', mobile: true, icon: 'event' },
    // { name: 'Mails', path: 'mails', mobile: true, icon: 'mail' },
    // { name: 'Abosystem', path: 'subscriptions', mobile: false, icon: 'group' },
    // { name: 'Einstellungen', path: 'settings', mobile: true, icon: 'settings' },
    //  { name: 'Abmelden', path: 'logout', mobile: false, icon: 'exit_to_app' }
  ];
  selected = 'Package';
  user: AppUser;

  constructor(private router: Router, private auth: AuthService) {
    this.user = this.auth.user;
    const ss = JSON.stringify(this.user, null, 3);
  }

  ngOnInit() {

  }

  navigate(e: MouseEvent, route: Object): void {

  }
}
