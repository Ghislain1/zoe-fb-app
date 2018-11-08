import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { MakeFormComponent } from './components/make-form/make-form.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'admin/dashbord', component: AdminDashboardComponent },
      { path: 'make/new', component: MakeFormComponent },
      { path: 'model/new', component: ModelFormComponent },
    ])
  ],
  declarations: [AdminDashboardComponent, MakeFormComponent, ModelFormComponent]
})
export class AdminModule { }
