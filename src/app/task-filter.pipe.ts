import { Pipe, PipeTransform } from '@angular/core';

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
}

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], filter: string): Task[] {
    if (!tasks || !filter) {
      return tasks;
    }
    return tasks.filter(task => task.title.toLowerCase().includes(filter.toLowerCase()));
  }
}