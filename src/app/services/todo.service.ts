
export class TodoService {

  /** Propriété contenant toutes les todos*/
  allTodos: any[] = [
    
  ]
  constructor() {}

  
/** Verifie si une session existe  */
  todosInit() {
    if(window.sessionStorage.length > 0) {
      for(let elem of this.getAllTodo()) {
        this.allTodos = [...this.allTodos, elem]
      }
    }
  }

  /** Transforme les valeurs de sessions (Todos) en String  */
  stringiFyerTodo() {
    window.sessionStorage.setItem('userTodos', JSON.stringify(this.allTodos))
  }
   /** Renvoie la liste des todos sous la forme d'un Objet */
  getAllTodo() {
    return JSON.parse(window.sessionStorage.getItem('userTodos'))
  } 

  /** Inverse l'etat en cours d'une todo */
  isChecked(todoId:String) {
    this.allTodos.forEach((e, i) => {
      if(e.id === todoId) {
        e.isDone === true ? e.isDone = false : e.isDone = true
      }
    })
    this.stringiFyerTodo()
  }

  /** Change l'etat de toutes les todos en isDone === true  */
  checkAllTodo() {
    this.allTodos = this.allTodos.map(e => {
      e.isDone = true
      return e
    })
    this.stringiFyerTodo()
  }

  /** Change l'etat de toutes les todos en isDone === false  */
  unCheckAllTodo() {
    this.allTodos = this.allTodos.map(e => {
      e.isDone = false
      return e
    })
    this.stringiFyerTodo()
  }

  /** Ajoute une todo a la liste  */
  addNewTodo(newTodo: String) {
    let todoId = `userTodoId${this.allTodos.length + 1}`
    let listId = `listId1${this.allTodos.length + 1}`
    let modalId = `${todoId}Modal`
    
    this.allTodos = [...this.allTodos, { 
      id: todoId, 
      listId: listId, 
      todo: newTodo,
      modalId: modalId, 
      isDone: false 
    }]
    
    this.stringiFyerTodo()
  }

  /** Modifie la todo choisie */

  editTodo(todoId: String, newTodo: String) {
    this.allTodos = this.allTodos.map(e => {
      if(e.id === todoId) {
        
        e.todo = newTodo
        e.isDone = false
      }
      console.log(e)
      return e
    })
    this.stringiFyerTodo()
  }

  /** Efface une todo de la liste, quel soit checked ou non */
  deleteTrashedTodo(trashedListId: String) {
    const newTodoList = this.allTodos.filter(e => {
      return e.listId !== trashedListId
    })
    this.allTodos = newTodoList
    this.stringiFyerTodo()
  }

  /** Effacer toutes les todos checked de la liste  */
  deleteCheckedTodos() {
    const newTodoList = this.allTodos.filter(e => {
      return e.isDone === false
    })
    this.allTodos = newTodoList
    this.stringiFyerTodo()
    
  }
}