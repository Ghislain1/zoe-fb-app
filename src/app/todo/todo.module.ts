import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInfoComponent } from './components/todo-info/todo-info.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoRoutineModule } from './todo-routine.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from '../core/services/http-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutineModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoInfoComponent],
  providers:[TodoService]
})
export class TodoModule { }
