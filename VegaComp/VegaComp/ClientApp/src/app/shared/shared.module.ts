import { BrowserXhrWithProgress } from './services/progress.service';
import { BrowserXhr } from '@angular/common/http/src/xhr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: BrowserXhr, useClass: BrowserXhrWithProgress }//--> Tell Angualr wehn you see BrowserXhr use BrowserXhrWithProgress
  ]
})
export class SharedModule { }
