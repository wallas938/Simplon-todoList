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

  allowDrop(e: any) {
    e.preventDefault();
  }

  todoDraggedHandler(e: any) {
    console.log(e)
    e.dataTransfer.setData("text", e.target.id);
  }

  todoDroppedHandler(e: any) {
    e.preventDefault()
    let data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data));
    console.log(data)
  }

  checkingTodoHandler(e: any) {
    console.log(e)
    this.todoService.checkAllTodo()
    this.updateTodos()
  }

  unCheckingTodoHandler() {
    this.todoService.unCheckAllTodo()
    this.updateTodos()
  }

  deleteCheckedTodoHandler() {
    this.todoService.deleteCheckedTodos()
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
