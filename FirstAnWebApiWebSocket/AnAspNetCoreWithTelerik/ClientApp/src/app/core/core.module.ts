import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { RouterModule, Route } from '@angular/router';



const routes: Route[] = [
  { path: '', component: AppHomeComponent },


]
@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent, AppHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [AppHeaderComponent, AppFooterComponent, AppHomeComponent]
})
export class CoreModule { }
