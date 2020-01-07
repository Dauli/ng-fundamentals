import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared/index';

@Component({
  templateUrl: './events-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventsDetailsComponent implements OnInit{
  event: IEvent;

  constructor(private eventService: EventService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    // displays of event details accordingly
    this.event = this.eventService.getEvent( +this.route.snapshot.params['id'] );
  }
}
