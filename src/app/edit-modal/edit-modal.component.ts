import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

@Input() todoId: String
@Input() userTodo: String
@Input() modalId: String

todoForm = new FormGroup({
  newTodo: new FormControl(''),
});

  constructor(private todoService: TodoService) { 
    
  }

  ngOnInit() {
  }

  todoEditHandler(todoId: String) {
     /** ICI !!! */
    console.log(todoId)
  }

}
