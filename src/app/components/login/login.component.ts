import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoggedIn:boolean;
  constructor(private _userAuthService: UserAuthService) {
    this.isLoggedIn=this._userAuthService.isLoggedIn();
  }

  
  
  logIn() {
    this._userAuthService.login();
    this.isLoggedIn=this._userAuthService.isLoggedIn();
  }
  logOut() {
    this._userAuthService.logout();
    this.isLoggedIn=this._userAuthService.isLoggedIn();
  }
  
}
