import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
}

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Input() task!: Task;
  @Output() onUpdateTask = new EventEmitter<Task>();

  updateTask() {
    this.onUpdateTask.emit(this.task);
  }
}