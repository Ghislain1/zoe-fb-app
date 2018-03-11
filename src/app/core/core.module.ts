import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingService } from './services/logging.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config-service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers:[LoggingService, ConfigService,      HttpErrorHandler, MessageService ]
})
export class CoreModule { }
