import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDescriptionComponent } from './components/about-description.component';
import { AboutRoutineModule } from './about-routine.module';
import { DummyShapeProvider } from './services/dummy.shape.provider';
import { DummyNodeTemplateProvider } from './services/dummy-node-template.provider';
import { NodeDataService } from './services/node-data.service';
import { LinkDataService } from './services/link-data.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutineModule
  ],
  declarations: [AboutDescriptionComponent],
  providers: [DummyShapeProvider, LinkDataService, NodeDataService, DummyNodeTemplateProvider]
})
export class AboutModule { }
