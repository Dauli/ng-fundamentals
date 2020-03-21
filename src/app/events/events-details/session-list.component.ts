import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared';
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from 'src/app/users/auth.service';
import { VoterService } from './voter.service';


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  faFire = faFire;
  @Input() filterBy: string;
  @Input() sortBy: string;
  // this is a new sessions array copy for filtering, set to empty array
  // that each time all, beginner, ... is clicked, that array is
  // populated with the current filter to be displayed
  visibleSessions: ISession[] = []

  constructor(public auth: AuthService, private voterService: VoterService ) {}

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

  // Toggle vote methode uses in UpvoteComponent
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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
