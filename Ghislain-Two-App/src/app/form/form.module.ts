import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './components/form-list.component';
import { FormRoutingModule } from './form-routine.module';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
  ],
  declarations: [FormListComponent]
})
export class FormModule { }
