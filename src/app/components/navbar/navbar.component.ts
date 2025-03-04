import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn!:boolean;
constructor(private _userAuthService: UserAuthService) {}

ngOnInit(): void {
   this._userAuthService.getAuthSubject().subscribe({
    next:(status)=>{
      this.isLoggedIn=status;
    }
   })

  }

  
}