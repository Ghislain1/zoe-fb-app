import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { Routes, RouterModule } from '@angular/router';

const configRoutes: Routes = [{ path: "app-config", component: ConfigComponent }]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(configRoutes)
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule {

}
