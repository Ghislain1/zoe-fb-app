import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  list: any[] = [];
  username: string = '';
  password: string = '';
  showSpinner: string = '';

  constructor(private router: Router) { }


  ngOnInit() {
    let counter = 1;
    for (let index = 0; index < 10; index++) {

      this.list.push('Comming soon!!!> ' + counter++);

    }
  }
  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {

      this.router.navigate(['user']);

    } else {

      alert('Invalid credentials');

    }

  }

}


