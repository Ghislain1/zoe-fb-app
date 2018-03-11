

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
 
 

const todoRoutes: Routes = [
     

 { path: 'app-todo', component: TodoComponent, children:[


 
 ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(todoRoutes)
  ],
  exports: [    RouterModule  ]
})
export class TodoRoutineModule { }