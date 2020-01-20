import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    button { margin: 20px; }
    em {
      float: right;
      color: #E05C65;
      padding: 10px;
    }
    .error input { background-color: #E3C3C5; }
    .error::webkit-input-placeholder { color: #999; }
    .error::-moz-placeholder { color: #999; }
    .error:-moz-placeholder { color: #999; }
    .error:ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  newEvent;
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService){
  }

  /**
   * We implement OnInit so we can use Two-way Binding.
   * In html we bind ngModel to newEvent.location.address ...
   * that applies only for 2 way binding.
   * But one way binding doesn't need, it only apply ngModelGroup only

  ngOnInit(){
    this.newEvent = {
      name: 'Ng Spectaculor',
      date: '8/8/2028',
      time: '10:00 am',
      price: 788.99,
      location: {
        address: '456 Happy Str',
        city: 'Felicity',
        country: 'Angularistan'
      }
    }
  }
  */


  // Submit values entered in form
  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }
}
