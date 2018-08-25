import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoe-fb-app';

  public people$: Observable<any[]>;
  public people: AngularFireList<any>;
  pathOrRef: any;

  constructor(db: AngularFireDatabase) {
    this.pathOrRef = '/results';
    this.people$ = db.list(this.pathOrRef).valueChanges();

    this.people = db.list(this.pathOrRef);

    console.log(JSON.stringify(this.people));
    console.log(db);

  }
}
