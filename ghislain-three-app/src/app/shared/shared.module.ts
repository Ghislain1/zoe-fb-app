import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './pipes/keys.pipe';
import { HumanizePipe } from '../core/pipes/humanize.pipe';
import { ZoomableDirective } from './directives/zoomable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // components
    // pipes
    KeysPipe,
    HumanizePipe,
    ZoomableDirective,
    //SliderComponent,
    //InnerIproductComponent,
  ],
  exports: [
    // components
    // modules
    CommonModule,
    //BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    // pipes
    KeysPipe,
    HumanizePipe,
    //  DragScrollModule,
    ZoomableDirective,
    // ProductSliderComponent,
    // DragScrollModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    //BsDropdownModule.forRoot(),
    //DragScrollModule,
    RouterModule,
    //  NgxInputStarRatingModule
  ]
})
export class SharedModule { }