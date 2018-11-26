import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { EventComponent } from './components/event/event.component';

const eventManagementRoutes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/add',
    component: NewEventComponent
  },
  {
    path: 'events/:eventId',
    component: EventComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(eventManagementRoutes)
  ],
  declarations: [EventsComponent, NewEventComponent, EventComponent]
})
export class EventManagementModule {}
