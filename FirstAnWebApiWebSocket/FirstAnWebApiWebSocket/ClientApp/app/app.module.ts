import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WebsocketService } from './services/websocket.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebSocketSampleComponent } from './components/web-socket-sample/web-socket-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    WebSocketSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WebsocketService],
  exports: [WebSocketSampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
