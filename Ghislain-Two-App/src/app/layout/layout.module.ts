
import { FormRoutingModule } from '../form/form-routine.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [LayoutComponent]

})
export class LayoutModule { }
