import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassicUrlGuard } from './services/classic-url.guard';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavsideComponent } from './components/navside/navside.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  declarations: [NavbarComponent, FooterComponent, NavsideComponent, LoginComponent],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    NavsideComponent,
    // exported components
    NavbarComponent,
    FooterComponent
  ],
  providers: [ClassicUrlGuard]
})
export class SharedModule { }
