

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInfoComponent } from './components/todo-info/todo-info.component';


const todoRoutes: Routes = [
     

 { path: 'app-todo', component: TodoComponent, children:[

  { path: 'app-todo-info',  component: TodoInfoComponent },
  { path: 'app-todo-list',  component: TodoListComponent },
 ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(todoRoutes)
  ],
  exports: [    RouterModule  ]
})
export class TodoRoutineModule { }