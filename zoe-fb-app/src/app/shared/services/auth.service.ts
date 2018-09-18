import { Injectable } from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs/index';
import { UserService } from './user.service';
import { AppUser } from '../models/app-user';


import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';







@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {


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
    return this.user$.pipe(switchMap(user => {
      if (user) return this.userService.get(user.uid);
      return of(null);
    }));
  }
}