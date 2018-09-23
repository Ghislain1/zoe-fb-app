import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  // user$: Observable<firebase.User>;

  constructor(
    // private userService: UserService,
    // private afAuth: AngularFireAuth,
    // private route: ActivatedRoute
  ) {


    // this.user$ = afAuth.authState;
  }

  login() {
    // const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // localStorage.setItem('returnUrl', returnUrl);

    //  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    /// this.afAuth.auth.signOut();
  }

  /* get appUser$(): Observable<AppUser> {
     return this.user$.pipe(switchMap(user => {
       if (user) { return this.userService.get(user.uid); }
       return of(null);
     })); */
}
}
