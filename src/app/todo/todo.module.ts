import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { TodoComponent } from './components/todo/todo.component';
import { TodoRoutineModule } from './todo-routine.module';
 
import { TodoService } from './services/todo.service';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from '../core/services/http-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutineModule,
    CoreModule
  ],
  declarations: [TodoComponent],
  providers:[TodoService]
})
export class TodoModule { }
