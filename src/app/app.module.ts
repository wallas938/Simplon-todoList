import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DateService } from './services/date.service';
import { Logger } from './services/logger.service';
import { TodoService } from './services/todo.service';
import {  } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DateService,
    Logger,
    TodoService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
