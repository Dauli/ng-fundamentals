import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    button { margin: 10px; }
    em {
      float: right;
      color: #E05C65;
      padding: 10px;
    }
  `]
})
export class LoginComponent {
  //userName;
  //password;
  mouseOverLogin;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
