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
    const cta = this.db.list('/categories');

    // TODO: Ghislain https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    return cta.valueChanges();
  }

  private log(obst: any) {

    console.log(JSON.stringify(obst, null, 4));
  }
}
