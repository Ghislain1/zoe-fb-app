import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TopologyListComponent } from './components/topology-list/topology-list.component';
import { TopologyComponent } from './topology.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'app-topology-list', component: TopologyListComponent },
      { path: 'app-topology/:systemTag', component: TopologyComponent },
    ])],
  declarations: [TopologyListComponent, TopologyComponent],
  // exports: [TopologyComponent]
})
export class TopologyModule { }
