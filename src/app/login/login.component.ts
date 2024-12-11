import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() email : string = ''; // user@email.com
  @Input() password : string = ''; // password
  constructor(private authenticationService: AuthenticationService, private router : Router) {
  }

  login() {
    if (this.authenticationService.userLoggedIn.email === this.email
      && this.authenticationService.userLoggedIn.password === this.password) {
        this.router.navigate(['/profile']);
        console.log("Login Successful!");  
    }
    
    else {
      alert("Login Failed!");  
    }
  }
}
