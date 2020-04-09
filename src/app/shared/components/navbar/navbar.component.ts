import { Component, OnInit } from '@angular/core';

import { Route } from '@angular/compiler/src/core';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  background = '';
  constructor(
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  toggleBackground() {
    this.background = this.background ? 'warn' : 'primary';
  }

  openSnackBar(message: string, action: string) {

    this.snackBar.open(message, action, {

      duration: 2000,

    });

  }

  focus() {
    this.router.navigate(['admin']);
  }


}
