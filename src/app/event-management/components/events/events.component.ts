import { Component, OnInit } from '@angular/core';

import { EventManagementService } from '../../event-management.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Array<any>;
  constructor(private _eventManagementService: EventManagementService) {
    this.events = [];
  }

  ngOnInit() {
    this._eventManagementService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }
}
