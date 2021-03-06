import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarDateFormatter, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { USERS } from '../users'; 
import { User } from '../user'; 
import localeFr from '@angular/common/locales/da'; 


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html',
  styleUrls:['style.css'],
})


export class DemoComponent {
  view: string = 'month';

  viewDate = new Date();

  users = USERS; 

  selectedUser: User; 
  
  selectedEvent: CalendarEvent; 


  events: CalendarEvent[] =  [
  {
      title: "Åbenvagt",
      color: USERS[0].color,
      start: addHours(startOfDay(new Date()), 100),
      meta: {
        user: USERS[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
       actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.selectedEvent = event; 
            this.display = "block"; 
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ],
      draggable: true
    },
     {
      title: "Lukkevagt",
      color: USERS[1].color,
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(startOfDay(new Date()), 10),
      meta: {
        user: USERS[1]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.selectedEvent = event; 
            this.display = "block"; 
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ],
      draggable: true
    },
    {
      title: "Åbenvagt",
      color: USERS[2].color,
      start: addHours(startOfDay(new Date()), 4),
      meta: {
        user: USERS[2]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.selectedEvent = event; 
            this.display = "block"; 
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ],
      draggable: true
    }
];  


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

  openDialog (){
    this.display = 'block'; 
  }

refresh: Subject<any> = new Subject();

onSelect(user: User, event: CalendarEvent){
  this.selectedUser = this.selectedEvent.meta.user
}

 activeDayIsOpen: boolean = false;

 dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
        this.refresh.next(); 
        console.log('lukker2');
        
      } else {
        this.activeDayIsOpen = true;
        console.log('åbner');
        this.refresh.next(); 
      }
    }
  }



}
