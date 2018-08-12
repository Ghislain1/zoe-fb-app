import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routine.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
