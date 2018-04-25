import { Injectable } from "@angular/core";
import { HandleError, HttpErrorHandler } from "../../core/services/http-error-handler.service";
import { MessageService } from "../../core/services/message.service";
import { LoggingService } from "../../core/services/logging.service";

@Injectable()
export class OutputService {

  private handleError: HandleError;

  constructor(
    private messageService: MessageService,
    private loggingService: LoggingService,
    private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ConfigService');
    this.getAll();
  }


  getAll() {
    let infos: string[] = [];
    this.loggingService.logs.forEach(inn => infos.push(inn));
    this.messageService.messages.forEach(inn => infos.push(inn));
    return infos;
  }





}