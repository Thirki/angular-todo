import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'to-do';
  public taskList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  private refreshTaskList(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.taskList = todos;
    });
  }

  ngOnInit(): void {
    this.refreshTaskList();

    this.todoService.emitEvent.subscribe((sinal) => {
      this.refreshTaskList();
    });
  }
}
