import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  userTodos: any

  todoForm = new FormControl('')
  
  constructor(private todoService: TodoService) {

    this.userTodos = this.todoService.getAllTodo()
  }

  ngOnInit() {
    this.todoService.todosInit()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  getCheckedTodo(todoId: String) {
    this.todoService.checkThisTodo(todoId)
    this.updateTodos()
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  todoDraggedHandler(event: any) {
    event.dataTransfer.setData("text", event.target.id);
  }

  todoDroppedHandler(event: any) {
    event.preventDefault()
    let data = event.dataTransfer.getData("text")
    this.todoService.deleteTrashedTodo(data)
    this.updateTodos()
  }

  checkingTodoHandler(event: any) {
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
    console.log(this.userTodos)
    
  }

  updateTodos() {
    this.userTodos = this.todoService.getAllTodo()
  }
}
