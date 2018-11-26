import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventManagementService } from '../../event-management.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventId: number;
  event: any;

  constructor(
    private _eventManagementService: EventManagementService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.event = {};
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: any) => {
      this.eventId = params.eventId;
      this.getEvent();
    });
  }

  getEvent() {
    this._eventManagementService.getEvent(this.eventId).subscribe(event => {
      this.event = event;
    });
  }
}
