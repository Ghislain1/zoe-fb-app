import { UserService } from './user-service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    user$: Observable<AppUser>;
    returnUrl: string;
    constructor(
        private userService: UserService,
        private route: ActivatedRoute) {

        //     this.user$ = afAuth.authState;
    }

    login() {
        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', this.returnUrl);

    }

    logout() {

    }

    get appUser$(): Observable<AppUser> {


        return this.userService.get(this.returnUrl);


    }
}