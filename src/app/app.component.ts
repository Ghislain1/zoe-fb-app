import { TranslateService } from '@ngx-translate/core';
import { UserService } from './shared/services/user.service';

import { AuthService } from './shared/services/auth.service';

import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  loggedIn!: Boolean;
  navigatingToLogin = false;

  constructor(private auth: AuthService, private router: Router) {
    /* setTimeout(() => {
     this.user = {"username": "test1"};
   }, 2000);*/
  }

  ngOnInit(): void {
    console.log('router:', this.router);
    this.loggedIn = this.auth.user && this.auth.session && !this.auth.session.isExpired();
    this.loggedIn = false;
    if (!this.loggedIn) {
      console.log('Navigating...');
      this.navigatingToLogin = true;
      this.router.navigateByUrl('/login');
    } else {
      console.log('Logged In!');
    }

    this.router.events.subscribe(() => {
      // console.log("ROUTER-EVENT")
      this.loggedIn = this.auth.user && this.auth.session && !this.auth.session.isExpired();
      if (!this.loggedIn) {
        console.log('[Router] Not logged in', this.auth.user, this.auth.session);
        // console.log("not logged in")
        if (this.router.url == '/login') {
          this.navigatingToLogin = true;
        } else if (!this.navigatingToLogin) {
          this.router.navigateByUrl('/login');
        }
      } else {
        console.log('[Router] Logged in');
      }
    });
  }
}
