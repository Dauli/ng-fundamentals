import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';

declare let toastr;

@Component({
 template: `
  <div>
    <h1>Up Comming Angular Events</h1>
    <hr>

    <div class="row">
      <div class="col-md-5" *ngFor="let event of events"
      (click)="handleThumbnailClick(event.name)">
        <thumbnail [event]='event'></thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any = []
  constructor(private eventService: EventService,
    private toastrService: ToastrService) {
    // all data implemented here can take long to load
  }

  // note that ngOnInit always load automatically in the browser
  // reason why we call our data here to load automatically
  ngOnInit() {
    // suscribe to observable 'cause we use Subject in our service
    this.eventService.getEvents().subscribe( events => {
      this.events = events;
    });
  }

  // toastr handle click
  handleThumbnailClick(eventName){
    toastr.success(eventName);
  }
}
