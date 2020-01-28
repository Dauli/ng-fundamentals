import { Component, Input } from "@angular/core";
import { ISession } from '../shared';
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent {
  @Input() sessions: ISession[];
  faFire = faFire;
  faCar = faCar;

}
