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
  @Input() sortBy: string;
  // this is a new sessions array copy for filtering, set to empty array
  // that each time all, beginner, ... is clicked, that array is
  // populated with the current filter to be displayed
  visibleSessions: ISession[] = []

  // We implements Onchanges to keep tracking every changes
  // Automatically to apply filtering functionality & sortering
  ngOnChanges() {
    if(this.sessions){
      // filtery functionality
      this.filterSessions(this.filterBy);

      // sorting functionality
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
      this.visibleSessions.sort(sortByVotesDesc);
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

// sorting algorithm functions
function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
