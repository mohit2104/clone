import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.route';

import { EventManagementModule } from './event-management/event-management.module';
import { EventManagementService } from './event-management/event-management.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [EventManagementModule, AppRoutingModule, BrowserModule],
  providers: [EventManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
