import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Activity {
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'activity-calendar',
  templateUrl: './activity-calendar.component.html',
  styleUrls: ['./activity-calendar.component.css']
})
export class ActivityCalendarComponent {
  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Input() activities: Activity[] = [];
  @Output() onSelectDate = new EventEmitter<Date>();
  @Output() onSelectActivity = new EventEmitter<Activity>();

  getDates(start: Date, end: Date): Date[] {
    const dates = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  selectDate(date: Date) {
    this.onSelectDate.emit(date);
  }

  selectActivity(activity: Activity) {
    this.onSelectActivity.emit(activity);
  }
}