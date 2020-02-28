import { Component } from "@angular/core";
import { AuthService } from '../users/auth.service';
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-navbar {
      font-size: 15px;
    }
    #searchForm {
      margin-right: 100px;
    }

    @media(max-width: 1200px) {
      #searchForm {
        display: none;
      }
    }

    li > a.active {
      color: #F97924;
    }
  `]
})
export class NavBarComponent {
  faSearch = faSearch;
  searchTerm: string;
  foundSessions:ISession[];

  constructor(private authService: AuthService,
    private eventService: EventService) {

    }

  // Search sessions function when user click to search
  // then returns found sessions of type ISessions[]
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe( sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
}
