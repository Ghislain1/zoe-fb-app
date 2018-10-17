import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    userUrl = 'assets/user.json';
    constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) {

    }

    // save(user: firebase.User) {
    //     this.http.object('/users/' + user.uid).update({
    //         name: user.displayName,
    //         email: user.email
    //     });
    //}

    get(uid: string): Observable<AppUser> {

        return this.http.get<AppUser>(this.userUrl);
    }
}