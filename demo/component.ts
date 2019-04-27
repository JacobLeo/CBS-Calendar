import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { addHours, startOfDay } from 'date-fns';
import { CALEVENT } from '../calendarevents'; 
import { Subject } from 'rxjs';


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})


export class DemoComponent {
  view: string = 'month';
  
  selectedEvent: CalendarEvent; 

  viewDate: Date = new Date();

  events: CalendarEvent = CALEVENT; 



 display = 'none'; 

  eventClicked({ event }: { event: CalendarEvent }): void {
    this.selectedEvent = event; 
    this.display = 'block'; 
    console.log('Event clicked', this.selectedEvent);
  }

eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  userChanged({ event, newUser }) {
    event.color = newUser.color;
    event.meta.user = newUser;
    this.refresh.next();
  }

  onCloseHandled (){
    this.display = 'none'; 
  }
refresh: Subject<any> = new Subject();


}
