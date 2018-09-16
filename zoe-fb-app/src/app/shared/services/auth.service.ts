import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { UserService } from './user.service';
import { AppUser } from '../models/app-user';

import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { switchMap, map } from 'rxjs/operators';




@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {

    alert("AUTServerice   ");
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe<AppUser>(map(v => v));
  }
}
