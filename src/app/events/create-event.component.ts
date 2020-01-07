import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1> <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>[Create Event Form Will Go Here]</h3>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
      </div>
    </div>
  `,
  styles: [`
    button { margin: 20px; }
  `]
})
export class CreateEventComponent {
  isDirty: boolean = true;

  constructor(private router: Router){

  }
  cancel(){
    this.router.navigate(['/events']);
  }
}
