import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SignupLogin';
}
