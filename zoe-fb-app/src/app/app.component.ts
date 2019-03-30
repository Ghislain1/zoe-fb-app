
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './shared/services/user.service';

import {
  Router,

  NavigationEnd,
  NavigationStart,
  NavigationCancel,
  NavigationError
} from '@angular/router';

import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading: boolean;

  constructor(
    private router: Router,
    translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.subscribeToLoading();

    if (isDevMode()) {
      console.log('👋 Development!');
    } else {
      this.subscribeToAddGA();
    }
  }

  private subscribeToAddGA() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  private subscribeToLoading() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          return;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
        default: {
          setTimeout(() => {
            this.loading = false;
          }, 300);
          return;
        }
      }
    });
  }
}
