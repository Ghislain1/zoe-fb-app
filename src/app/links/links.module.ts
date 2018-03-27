import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksRootComponent } from './components/links-root/links-root.component';
import { LinksRoutineModule } from './links-routine.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinksRoutineModule
  ],
  declarations: [LinksRootComponent]
})
export class LinksModule { }
