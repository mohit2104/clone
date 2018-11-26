import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventManagementService } from '../../event-management.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  event: any;
  constructor(
    private _eventManagementService: EventManagementService,
    private _router: Router
  ) {
    this.event = {
      name: '',
      date: '',
      duration: ''
    };
  }

  ngOnInit() {}

  addEvent() {
    this._eventManagementService.addEvent(this.event).subscribe(response => {
      this._router.navigateByUrl('/events');
    });
  }
}
