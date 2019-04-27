import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { addHours, startOfDay } from 'date-fns';
import { USERS } from '../users'; 

export const CALEVENTS: CalendarEvent[] =  [
  {
      title: 'Lukkevagt',
      color: USERS[0].color,
      start: addHours(startOfDay(new Date()), 5),
      meta: {
        user: USERS[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
     {
      title: 'Åbnevagt',
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
      draggable: true
    },
    {
      title: 'Vikar vagt',
      color: USERS[1].color,
      start: addHours(startOfDay(new Date()), 500),
      meta: {
        user: USERS[1]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
]