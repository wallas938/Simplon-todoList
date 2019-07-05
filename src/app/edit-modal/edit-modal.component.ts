import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

@Input() todoId: String
@Input() userTodo: String
@Input() modalId: String
//@Output() alertEditing = new EventEmitter<>()

newTodo = new FormControl('');

  constructor(private todoService: TodoService) { 
    
  }

  ngOnInit() {
  }

  todoEditHandler(todoId: String) {
     this.todoService.editTodo(todoId, this.newTodo.value)
     ///this.alertEditing.emit();
  }

}
