import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  openSnackBar(message: string, action: string) {

    this.snackBar.open(message, action, {

      duration: 2000,

    });

  }


}
