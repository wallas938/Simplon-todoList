import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  allTodos: any[] = [
    
  ]
  constructor(private cookieService: CookieService) {}

  todosInit() {
    if(window.sessionStorage.length > 0) {
      for(let elem of this.getAllTodo()) {
        this.allTodos = [...this.allTodos, elem]
      }
      console.log('todoInit(): ', this.allTodos)
    }
    

  }

  stringiFyerTodo() {
    window.sessionStorage.setItem('userTodos', JSON.stringify(this.allTodos))
  }
  
  getAllTodo() {
    return JSON.parse(window.sessionStorage.getItem('userTodos'))
  } 

  isChecked(todoId:String, statusTodo: Boolean) {
    this.allTodos.forEach((e, i) => {
      if(e.id === todoId) {
        e.isDone === true ? e.isDone = false : e.isDone = true
      }
    })
    this.stringiFyerTodo()
  }
  
  checkAllTodo() {
    this.allTodos = this.allTodos.map(e => {
      e.isDone = true
      return e
    })
    this.stringiFyerTodo()
  }

  unCheckAllTodo() {
    this.allTodos = this.allTodos.map(e => {
      e.isDone = false
      return e
    })
    this.stringiFyerTodo()
  }

  addNewTodo(newTodo: String) {
    let todoId = `userTodoId${this.allTodos.length + 1}`
    let listId = `listId1${this.allTodos.length + 1}`
    
    this.allTodos = [...this.allTodos, { 
      id: todoId, 
      listId: listId, 
      todo: newTodo, 
      isDone: false 
    }]
    
    this.stringiFyerTodo()
  }

  deleteTrashedTodo(trashedListId: String) {
    const newTodoList = this.allTodos.filter(e => {
      return e.listId !== trashedListId
    })
    this.allTodos = newTodoList
    this.stringiFyerTodo()
    console.log('deleteCheckedTodos(): ', this.allTodos)
  }

  deleteCheckedTodos() {
    const newTodoList = this.allTodos.filter(e => {
      return e.isDone === false
    })
    this.allTodos = newTodoList
    this.stringiFyerTodo()
    
    console.log('deleteCheckedTodos(): ', this.allTodos)
  }
}