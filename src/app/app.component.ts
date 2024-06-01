import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
}

interface Activity {
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';
  taskArray: Task[] = [
    { title: 'Task 1', description: 'Description 1', dueDate: new Date(), status: 'Pending' },
    { title: 'Task 2', description: 'Description 2', dueDate: new Date(), status: 'Completed' }
  ];
  selectedTask!: Task;

  calendarStart: Date = new Date(2024, 0, 1);
  calendarEnd: Date = new Date(2024, 11, 31);
  activityArray: Activity[] = [
    { title: 'Activity 1', description: 'Description 1', date: new Date() },
    { title: 'Activity 2', description: 'Description 2', date: new Date() }
  ];
  selectedActivity!: Activity;

  handleTaskSelection(task: Task) {
    this.selectedTask = task;
  }

  updateTask(task: Task) {
    const index = this.taskArray.findIndex(t => t.title === task.title);
    if (index !== -1) {
      this.taskArray[index] = task;
    }
  }

  handleDateSelection(date: Date) {
    console.log('Selected Date:', date);
  }

  handleActivitySelection(activity: Activity) {
    this.selectedActivity = activity;
  }

  updateActivity(activity: Activity) {
    const index = this.activityArray.findIndex(a => a.title === activity.title);
    if (index !== -1) {
      this.activityArray[index] = activity;
    }
  }
}