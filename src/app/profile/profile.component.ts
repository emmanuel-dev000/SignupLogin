import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private authenticationService : AuthenticationService, private router : Router) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart && e.navigationTrigger === 'popstate') {
        this.router.navigate(['profile']);
      }
    });
  }

  get usernameLoggedIn() {
    return this.authenticationService.userLoggedIn.email;
  }

  logout() {
    this.router.navigate(['']);
  }
}
