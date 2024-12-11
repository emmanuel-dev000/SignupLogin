import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private authenticationService : AuthenticationService) {}

  get usernameLoggedIn() {
    return this.authenticationService.userLoggedIn.email;
  }
}
