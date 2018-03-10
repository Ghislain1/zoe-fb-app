import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../../core/models/address';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:[TodoService]
})
export class TodoListComponent implements OnInit {

  todos:Todo[];
  todos$:Observable <Todo[]>;
  selectedTodo: Todo;//// the todo currently being selected


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log("xxxxxxxxxxxxxxxxx");
  this.todos$=  this.todoService.getAll();
  this.setTodos();
  }

  setTodos(): void {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos);
  }  

  search(searchTerm: string) {
  
    if (searchTerm) {
      this.todoService.searchHeroes(searchTerm)
        .subscribe(heroes => this.todos = heroes);
    }
  }

  select(todo) {
    this.selectedTodo = todo;
  }

 
}
