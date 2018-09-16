import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  // TODO: Why? can you explain this?
  /*  getAll() {
     return this.db.list('/categories', {
       query: {
         orderByChild: 'name'
       }
     });
   } */


  getAll() {
    return this.db.list('/categories');
  }
}
