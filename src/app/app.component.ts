import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  displayname = '';
  displayemail = '';

  onSubmit(name: string , email: string ) {
    this.displayname = name;
    this.displayemail = email;
  }
}
