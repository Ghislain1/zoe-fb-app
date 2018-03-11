import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputRoutineModule } from './output-routine.module';
import { OutputService } from './services/output.service';
import { OutputComponent } from './output.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    OutputRoutineModule,
    CoreModule,
  ],
  declarations: [OutputComponent],
  providers:[OutputService]
})
export class OutputModule { }
