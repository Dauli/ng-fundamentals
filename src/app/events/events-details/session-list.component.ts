import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared';
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  faFire = faFire;
  faCar = faCar;
  @Input() filterBy: string;
  // this is a new sessions array copy for filtering, set to empty array
  // that each time all, beginner, ... is clicked, that array is
  // populated with the current filter to be displayed
  visibleSessions: ISession[] = []

  // We implements Onchanges to keep tracking every changes
  // Automatically to apply filtering functionality
  ngOnChanges() {
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }

  // FilterSessions functionality that displays acordingly to current filter
  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter( session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}
