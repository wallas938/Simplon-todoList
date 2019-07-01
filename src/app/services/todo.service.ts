export class TodoService {

  allTodos: any[] = [
    {
      id: 'userTodoId1',
      listId: 'listId1',
      todo: 'Virum et laureas et pertulit.',
      isDone: false
    },
    {
      id: 'userTodoId2',
      listId: 'listId2',
      todo: 'Insignem audacia dum se senatus.',
      isDone: false
    },
  ]
  constructor() {}

  getAllTodo() {
    return this.allTodos
  }

  checkAllTodo() {
    this.allTodos = this.allTodos.map(e => {
      e.isDone = true
      return e
    })
  }

  unCheckAllTodo() {
    this.allTodos = this.allTodos.map(e => {
      e.isDone = false
      return e
    })
  }

  addNewTodo(newTodo: String) {
    let todoId = `userTodoId${this.allTodos.length + 1}`
    let listId = `listId1${this.allTodos.length + 1}`
    this.allTodos = [...this.allTodos, { id: todoId, listId: listId, todo: newTodo, isDone: false }]
  }

  deleteTrashedTodo(trashedListId: String) {
    const newTodoList = this.allTodos.filter(e => {
      return e.listId !== trashedListId
    })
    this.allTodos = newTodoList
  }

  deleteCheckedTodos() {
    const newTodoList = this.allTodos.filter(e => {
      return e.isDone === false
    })
    this.allTodos = newTodoList
  }
}