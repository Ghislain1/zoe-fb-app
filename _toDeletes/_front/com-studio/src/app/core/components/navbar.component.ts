
import { Observable } from 'rxjs';
import { OnInit, Component } from '@angular/core';
import { TopologyService } from '../../shared/services/topology.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // appUser: AppUser;
  //  favories$: Observable<MovieFavory>;

  topologyItemList$: Observable<TopologyItem>

  constructor(
    // private auth: AuthService,

    private topologyService: TopologyService) {
  }

  async ngOnInit() {

    // this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.topologyItemList$ = await this.topologyService.getTopologyItemList();
  }

  logout() {
    // this.auth.logout();
  }

}
