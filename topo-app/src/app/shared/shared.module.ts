import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';

import { RouterModule } from '@angular/router';
import { ConfigResolver } from './resolvers/config-resolver.service';
import { MessagesComponent } from './components/mgs/messages.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,


    ],
    declarations: [NaviComponent, MessagesComponent],
    exports: [NaviComponent, MessagesComponent],
    providers: [ConfigResolver]
})
export class SharedModule { }
