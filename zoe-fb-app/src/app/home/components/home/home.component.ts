import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  showSpinner: string;

  constructor(private router: Router) { }


    ngOnInit() {

    }
    login(): void {

      if (this.username === 'admin' && this.password === 'admin') {

       this.router.navigate(['user']);

      } else {

        alert('Invalid credentials');

      }

    }

    }


