import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Up Comming Angular Events</h1>
    <hr>

    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <thumbnail [event]='event'></thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any = []
  constructor(private eventService: EventService) {
    // all data implemented here can take long to load
  }

  // note that ngOnInit always load automatically in the browser
  // reason why we call our data here to load automatically
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
