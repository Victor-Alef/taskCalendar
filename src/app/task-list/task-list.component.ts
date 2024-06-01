import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
}

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() filter: string = '';
  @Output() onSelectTask = new EventEmitter<Task>();

  selectTask(task: Task) {
    this.onSelectTask.emit(task);
  }
}