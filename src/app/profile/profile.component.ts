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
        const confirmLogout = confirm('Do you want to logout?');
        if (!confirmLogout) {
          // Block navigation by re-pushing the current URL to the stack
          history.pushState(null, '', window.location.href);
  
        }
      }
    });
  
    // Add an initial state to the history stack
    history.pushState(null, '', window.location.href);
  }

  get usernameLoggedIn() {
    return this.authenticationService.userLoggedIn.email;
  }
}
