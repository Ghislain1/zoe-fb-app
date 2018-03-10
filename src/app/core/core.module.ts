import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingService } from './services/logging.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers:[LoggingService,HttpErrorHandler, MessageService ]
})
export class CoreModule { }
