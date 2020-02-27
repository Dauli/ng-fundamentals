import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private authService: AuthService, private router: Router,
    private toastrService: ToastrService) {

  }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.toastrService.success('Welcome ' + this.authService.currentUser.firstName);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
