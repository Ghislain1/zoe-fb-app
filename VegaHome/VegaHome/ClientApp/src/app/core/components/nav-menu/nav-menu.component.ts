import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../shared/services/vehicle.service';
import { AuthService } from '../../../shared/services/auth.service';
import { AppUser } from '../../../shared/models/allllll';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  appUser: AppUser;
  vehicule$: any;

  constructor(
    // private auth: AuthService,
    private vehicleService: VehicleService) {
    console.log('NavMenuComponent ');
  }



  async ngOnInit() {
    // this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.appUser = {
      email: 'EMAIL',
      isAdmin: true,
      name: 'Ghislain'
    };
    this.vehicule$ = await this.vehicleService.getMakes();
  }

  logout() {
  }

}
