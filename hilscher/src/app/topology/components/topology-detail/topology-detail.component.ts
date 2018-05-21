 
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Topology } from '../../../core/models/topology';
import { MessageService } from '../../../core/services/message.service';

 

 
@Component({
  selector: 'app-topology-detail',
  templateUrl: './topology-detail.component.html',
  styleUrls: ['./topology-detail.component.css']
})
export class TopologyDetailComponent implements OnInit {
  
 

  topology: Topology;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public messageService: MessageService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { topology: Topology }) => {
        this.editName = data.topology.name;
        this.topology = data.topology;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.topology.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.topology || this.topology.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    this.messageService.add('Discard changes?');
    return Observable.of(true);
  }

  gotoCrises() {
    let crisisId = this.topology ? this.topology.id : null;
  
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}


 