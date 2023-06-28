import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  public mustAddTask: boolean = false;
  public task: string = '';

  @Input() taskList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  public handleClick = () => {
    if (this.task) {
      this.todoService.postTodo(this.task).subscribe(() => (this.task = ''));
    }
    this.mustAddTask = !this.mustAddTask;
  };
}
