export class TodoService {

  allTodos: any[] = [
    {
      id: 'userTodoId1',
      todo: 'Virum et laureas et pertulit.',
      isDone: false
    },
    {
      id: 'userTodoId2',
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
    this.allTodos = [...this.allTodos, { id: todoId, todo: newTodo, isDone: false }]
  }

  deleteCheckedTodos() {
    const newTodoList = this.allTodos.filter(e => {
      return e.isDone === false
    })
    this.allTodos = newTodoList
  }
}