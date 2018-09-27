import { Component, OnInit } from '@angular/core';
import { TopologyNode } from '../../../shared/models/topology-node';
import { ActivatedRoute } from '@angular/router';
import { TopologyNodeService } from '../../../shared/services/topology-node.service';
import { switchMap } from 'rxjs/Operators';

@Component({
    selector: 'app-topology-list',
    templateUrl: './topology-list.component.html',
    styleUrls: ['./topology-list.component.css']
})
export class TopologyListComponent implements OnInit {

    // Product== TopologyNode
    topologyList: TopologyNode[] = [];
    filteredTopologyList: TopologyNode[] = [];
    category: string;
    // cart$: Observable<ShoppingCart>;

    constructor(
        private route: ActivatedRoute,
        private topologyNodeService: TopologyNodeService,

    ) {
    }

    ngOnInit() {
        //  this.cart$ = await this.shoppingCartService.getCart();
        this.populateTopologyList();
    }

    private populateTopologyList() {
        this.topologyNodeService
            .getAll().pipe(switchMap(nodes => {
                this.topologyList = nodes;
                return this.route.queryParamMap;
            }))
            .subscribe(params => {
                this.category = params.get('category');
                this.applyFilter();
            });
    }


    //TODO: GHsilain --> this should how to use filter in Angular
    private applyFilter() {
        this.category = "fake";// Todo: GHsilain why? understand filter syntax in typeScript
        this.filteredTopologyList = (this.category) ?
            this.topologyList.filter(p => p.name.includes('M')) :
            this.topologyList;
    }
}