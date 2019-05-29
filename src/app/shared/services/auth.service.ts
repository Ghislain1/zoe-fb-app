import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AppSession } from '../models/app-session';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public user: AppUser;
    public session: AppSession;
    private setDefaultUser: Boolean = true;
    private defaultUser: AppUser = new AppUser({
        firstname: 'Ghis',
        lastname: 'Zeus',
        email: 'ghislain.Zeu2@popp.com',
        id: 1000
    });
    private defaultSession: AppSession = new AppSession({
        id: 'sNUJfaCE7kGt6UGEuaUWIQ',
        user_id: 1000
    });

    constructor() {
        if (window.localStorage.getItem('session_id')) {
            const data = this.getDataFromSessionId(window.localStorage.getItem('session_id'));
            this.user = data.user;
            this.session = data.session;
        } else if (this.setDefaultUser) {
            // this.user = this.defaultUser;
            // this.session = new Session({"id":"session_no_000001", "user_id":1});
            console.log('Set default user:', this.user);
        }
    }
    public login(username: String, password: String): Promise<AppUser> {
        const that = this;
        return new Promise(function(resolve, reject) {
            that.user = that.defaultUser;
            that.session = that.defaultSession;
            window.localStorage.setItem('session_id', 'session_no_000001');
            resolve(new AppUser({}));
        });
    }

    public logout(): Promise<Object> {
        const p = this.session.destroy();
        p.then(() => {
            this.user = undefined;
        });
        return p;
    }

    public getDataFromSessionId(session_id) {
        return { user: this.defaultUser, session: this.defaultSession };
    }
}
