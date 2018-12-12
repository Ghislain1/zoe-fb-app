import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn, PathReference } from 'angularfire2/database';

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
    const queryFn: QueryFn = fn => fn.orderByChild('name');
    const cta = this.db.list('/categories', queryFn);

    this.log(cta);
    // TODO: Ghislain https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    return cta.valueChanges();
  }

  private log(obst: any) {
    console.log(' CategoryService says: ' + JSON.stringify(obst, null, 4));
  }
}
