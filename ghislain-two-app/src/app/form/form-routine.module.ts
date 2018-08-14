
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormListComponent } from './components/form-list.component';


const routes: Routes = [
  {
    path: '',
    component: FormListComponent,
    data: {
      title: 'form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
