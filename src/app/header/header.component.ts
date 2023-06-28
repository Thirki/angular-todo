import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public today: Date = new Date();

  @Input() taskList: Todo[] = [];
}
