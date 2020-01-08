import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="row">
      <div class="md-col-6">
        <h3>[Edit Form Will Go Here]</h3>
        <br><br>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
      </div>
    </div>
  `,
  styles: [`
    button { margin: 20px; }
  `]
})
export class ProfileComponent {
  constructor(private router: Router) {}

  cancel(){
    this.router.navigate(['events']);
  }
}
