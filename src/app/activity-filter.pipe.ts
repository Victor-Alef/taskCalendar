import { Pipe, PipeTransform } from '@angular/core';

interface Activity {
  title: string;
  description: string;
  date: Date;
}

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements Pipe
{
    
}