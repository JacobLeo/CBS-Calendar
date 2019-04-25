import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { addHours, startOfDay } from 'date-fns';

const users = [
  {
    id: 0,
    name: 'Pædagog 1',
    color: colors.yellow
  },
  {
    id: 1,
    name: 'Pægdagog 2',
    color: colors.blue
  },
 
];


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})


export class DemoComponent {
  view: string = 'month';
  
  viewDate: Date = new Date();
  

  events: CalendarEvent[] = [
    {
      title: 'Lukkevagt',
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 5),
      meta: {
        user: users[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
     {
      title: 'Åbnevagt',
      color: users[1].color,
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(startOfDay(new Date()), 10),
      meta: {
        user: users[1]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      title: 'Vikar vagt',
      color: users[1].color,
      start: addHours(startOfDay(new Date()), 500),
      meta: {
        user: users[1]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  
  }

eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.events = [...this.events];
  }

  userChanged({ event, newUser }) {
    event.color = newUser.color;
    event.meta.user = newUser;
    this.events = [...this.events];
  }

}
