import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-tasks-area',
  templateUrl: './tasks-area.component.html',
  styleUrls: ['./tasks-area.component.scss'],
})
export class TasksAreaComponent {
  @Input() taskList: Todo[] = [];

  public checkTodo = (event: MouseEvent, task: Todo) => {
    event.preventDefault();
    this.todoService.putCompletedTodo(true, task.id).subscribe();
  };

  constructor(private todoService: TodoService) {}

  public removeTask = (task: Todo) => {
    this.todoService.deleteTodo(task.id).subscribe();
  };
}
