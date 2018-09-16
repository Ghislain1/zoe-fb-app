import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  //// TODO: return type has been modified!!
  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
