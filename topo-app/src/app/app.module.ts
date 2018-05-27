import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopologyModule } from './topology/topology.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutineModule } from './app-routine.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TopologyModule,
        SharedModule,
        AppRoutineModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {  // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
