import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Activity {
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent {
  @Input() activity!: Activity;
  @Output() onUpdateActivity = new EventEmitter<Activity>();

  updateActivity() {
    this.onUpdateActivity.emit(this.activity);
  }
}