import { HttpClient } from '@angular/common/http'; //allows you to make HTTP requests to a server
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({ //decorator used to define the metadata for the component
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup | any; //is a FormGroup instance that represents the login form

  constructor(private _http: HttpClient, private _route: Router) { } //constructor is used to inject dependencies in the component

  ngOnInit(): void { //lifecycle hook that is called after the component is initialized
    //Here, ngOnInit initializes the login form group with two form controls: email and password
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }


  loginData(login: FormGroup) { //called when the login form is submitted
    console.log(this.login.value);
    this._http.get("http://localhost:3000/signup", this.login.value)
      .subscribe((res:any) => { //receives the response from the server as the res parameter
        const user = res.find((a: any) => {
          return a.email === this.login.value.email && a.password === this.login.value.password
        })

        if (user) {
          alert("YOU ARE SUCCESSFULLY LOGGED IN")
          this.login.reset({})
          this._route.navigate(['dashboard']);
        }
        else {
          alert("INVALID CREDENTIALS")
          this._route.navigate(['login']);
        }

      }, err => { //any error during the HTTP request, the err parameter of the callback function is triggered
        alert("something went wrong");
      }
      )
  }
}
