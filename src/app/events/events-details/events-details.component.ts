import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/index';


@Component({
  templateUrl: './events-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer; }
  `]
})
export class EventsDetailsComponent implements OnInit{
  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    // displays of event details accordingly
    this.event = this.eventService.getEvent( +this.route.snapshot.params['id'] );
  }

  // Toggling add session with boolean
  addSession() {
    this.addMode = true;
  }

  // save new session to our session list
  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map( s => s.id ));
    session.id = nextId+1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

   // set add mode to false
   cancelAddSession() {
    this.addMode = false;
  }
}
