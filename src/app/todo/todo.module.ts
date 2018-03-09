import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInfoComponent } from './components/todo-info/todo-info.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoRoutineModule } from './todo-routine.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutineModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoInfoComponent]
})
export class TodoModule { }
