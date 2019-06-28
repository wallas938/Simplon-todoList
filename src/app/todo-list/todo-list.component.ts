import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  userTodos: any[]

  todoForm = new FormControl('')
  
  constructor(private todoService: TodoService) { 
    this.userTodos = this.todoService.getAllTodo()
  }

  ngOnInit() {
  }

  getCheckedTodo(todoId: String) {
    
  }

  checkingTodoHandler() {
    this.todoService.checkAllTodo()
    this.updateTodos()
  }

  unCheckingTodoHandler() {
    this.todoService.unCheckAllTodo()
    this.updateTodos()
  }

  deleteTodoHandler() {
    this.todoService.deleteTodo()
    this.updateTodos()
  }

  newTodoHandler(newTodo: String) {
    this.todoService.addNewTodo(newTodo)
    this.updateTodos()
    this.todoForm.setValue('')
  }

  updateTodos() {
    this.userTodos = this.todoService.getAllTodo()
  }
}
