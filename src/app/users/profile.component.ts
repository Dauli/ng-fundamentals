import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    button { margin-right: 20px; }
  `]
})
export class ProfileComponent implements OnInit{
  profileForm:FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName);
    this.lastName = new FormControl(this.authService.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  // after editing our user profile, let's save it
  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
}
