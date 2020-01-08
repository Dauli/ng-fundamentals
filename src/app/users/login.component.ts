import { Component } from "@angular/core";

@Component({
  templateUrl: './login.component.html',
  styles: [`
    button { margin: 10px; }
  `]
})
export class LoginComponent {
  userName;
  password;

  login(formValues){
    console.log(formValues);
  }
}
