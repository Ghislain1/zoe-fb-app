import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassicUrlGuard } from './services/classic-url.guard';
import {
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
} from '@angular/material';
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
    declarations: [ NavbarComponent, FooterComponent, NavsideComponent, LoginComponent ],
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
    providers: [ ClassicUrlGuard ]
})
export class SharedModule {}
