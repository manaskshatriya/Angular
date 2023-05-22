import { Component } from '@angular/core';

@Component({ //Component decorator is used to define and configure Angular components, decorator is used to define the metadata for the component
  selector: 'app-root', //used to represent the component in the template, <app-root> tag here
  templateUrl: './app.component.html', //specifies the HTML template file for the component
  styleUrls: ['./app.component.css'] //array of CSS files to be applied to the component
})
//Component Class
export class AppComponent { //class contains the component's properties and methods
  title = 'Registration Form'; //holds the title of the registration form
  //properties that will be used to display the name and email entered in the form
  displayname = '';
  displayemail = '';

  onSubmit(name: string , email: string ) { //called when the form is submitted
    //assigning values to the displayname and displayemail properties, they will be updated in the component's template, allowing the entered name and email to be displayed.
    this.displayname = name;
    this.displayemail = email;
  }
}
