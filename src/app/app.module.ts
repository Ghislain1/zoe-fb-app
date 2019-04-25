import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutineModule } from './app-routine/app-routine.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createTranslateModule } from './shared/services/translate';
import { HttpClientModule } from '@angular/common/http';
import { PackageModule } from './package/package.module';
import { RouterModule } from '@angular/router';
import { AppConfigurationService } from './shared/services/app-configuration.service';

// @Ghislain: The factory in angular
const appInitializerFn = (appConfigurationService: AppConfigurationService) => {
  return () => {
    return appConfigurationService.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutineModule,
    SharedModule,
    HomeModule,
    createTranslateModule(),
  ],
  // @Ghislain why? this here??
  providers: [AppConfigurationService, {
    provide: APP_INITIALIZER, // @Ghislain: ??? from angular Core
    useFactory: appInitializerFn,
    multi: true,
    deps: [AppConfigurationService] // Cool
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
