import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from '../../../core/models/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];
  todos$:Observable <Todo[]>;

  
  master = 'Master';
  editTodo: Todo; // the hero currently being edited
  selectedTodo: Todo;//// the todo currently being selected


  constructor(private todoService: TodoService) { }

  ngOnInit() { 
  this.todoService.getAll()  
  .subscribe(toods => this.todos = toods);
 }   
 
 add(name: string): void {
  this.editTodo = undefined;
  name = name.trim();
  if (!name) { return; }

  // The server will generate the id for this new hero
  const newTodo: Todo = { name } as Todo;
  this.todoService.addTodo(newTodo)
    .subscribe(hero => {
      this.todos$=this.todoService.getAll();
      this.todos.push(hero);}
  );
}

  search(searchTerm: string) {  
    if (searchTerm) {
      this.todoService.searchHeroes(searchTerm)
        .subscribe(heroes => this.todos = heroes);
    }
  }

  delete(): void {
    let todo= this.selectedTodo;
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
    this.selectedTodo= undefined;

  }
  
  select(todo) {
    this.selectedTodo = todo;
    this.todoService.publish(this.selectedTodo);
  }
}