import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './components/header/layout-header.component';
import { LayoutNaviComponent } from './components/navi/layout-navi.component';
import { LayoutFooterComponent } from './components/footer/layout-footer.component';
import { LayoutMainComponent } from './components/main/layout-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LayoutHeaderComponent, LayoutNaviComponent, LayoutMainComponent, LayoutFooterComponent],
  exports: [LayoutHeaderComponent, LayoutNaviComponent, LayoutMainComponent, LayoutFooterComponent]
})
export class LayoutModule { }
