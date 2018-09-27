import { AppUser } from '../../../shared/models/app-user';
import { TopologyNode } from '../../../shared/models/topology-node';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopologyNodeService } from '../../../shared/services/topology-node.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  topologyNode$: Observable<TopologyNode>;

  constructor(private topologyNodeService: TopologyNodeService) {

    // TODO: GHislain Mock data for user
    this.appUser = {
      name: 'Options',
      email: '@Ghislain',
      isAdmin: true,
      uId: 'Ghislain',
    };
    //  this.appUser = undefined;


  }

  async ngOnInit() {

    // this.topologyNode$ = await this.topologyNodeService.getAll();
    // this.topologyNode$.subscribe(ii => alert('NavbarComponent' + JSON.stringify(ii, null, 4)));
  }

  goOut(): void {

    alert(' TopologyEditor is going to  redirect to an external URL');
    const kb = 'https://kb.hilscher.com/'
    //TODO: Ghsialin why you are not use urlFql---> restrinctly!!!
    const urlFAQ = 'https://kb.hilscher.com/display/TOPOEDIT/FAQ';
    window.open(urlFAQ, '_blank');
  }
}