import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Controller } from '../../../core/models/bs/controller';
import { DeviceService } from '../../../core/services/device.service';
import { LinkData } from '../../../core/models/bs/link-data';
import { LinkService } from '../../../core/services/link.service';
import { Link } from '../../../core/models/bs/link';
import { observeOn } from 'rxjs/operators';


@Component({
  selector: 'app-links-root',
  templateUrl: './links-root.component.html',
  styleUrls: ['./links-root.component.css']
})
export class LinksRootComponent implements OnInit {

  links$: Observable<Link[]>;

  links: Link[];

  linkData: LinkData;

  constructor(private linkService: LinkService) {




  }

  ngOnInit() {
    this.getLinks();
  }



  getLinks(): void {
    this.linkService.getLinkDataList()
      .subscribe(links => {

        links.forEach(element => {
          this.linkData = element;
          this.links = element.links;
          this.links$ = Observable.of(this.links);
          console.log(JSON.stringify(element, null, 4));
        });


      });
  }

}
