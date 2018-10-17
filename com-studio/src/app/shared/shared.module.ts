import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ng2-validation';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopologyNodeService } from './services/topology-node.service';
import { TopologyLinkService } from './services/topology-link.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { UserService } from './services/user-service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { DataTableModule } from 'angular-6-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NodeTemplateService } from './services/node-template.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    NgbModule.forRoot() //// Todo:GHislain Why??-- test your drowdown 2h
  ],
  exports: [
    //MovieCardComponent,
    //MovieQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot().ngModule// Todo:GHislain Why??-- test your drowdown 2h


  ],
  providers: [
    AuthService, //Comsume  UserService!!!
    AuthGuard,
    UserService,// to get userifor just a test.
    TopologyNodeService,
    TopologyLinkService,
    ErrorHandlingService,
    NodeTemplateService //TODO:GHsialin how to create and consume this?
  ]

})
export class SharedModule { }
