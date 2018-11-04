import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './services/vehicle.service';
import { AuthService } from './services/auth.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressService } from './services/progress.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top',
      preventDuplicates: true,
    }),  // ToastrModule added
    //  ToastyModule.forRoot(), // To use method is a convention for modules that provide a singleton service.


  ],
  declarations: [PaginationComponent],
  providers: [VehicleService, AuthService, ProgressService],
  exports: [PaginationComponent, ToastrModule]
})
export class SharedModule { }
