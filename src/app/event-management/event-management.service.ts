import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventManagementService {
  events: Array<any>;
  constructor() {
    this.events = [];
  }

  getAllEvents() {
    return of(this.events);
  }

  setAllEvents(events) {
    this.events = events;
  }

  addEvent(event) {
    this.events.push(event);
    return of({});
  }

  getEvent(eventId) {
    if (isNaN(eventId) || eventId >= this.events.length) {
      return of({ errorMessage: 'No such event found' });
    } else {
      return of(this.events[eventId]);
    }
  }
}
