import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup | any;

  constructor(private _http: HttpClient, private _route: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }


  loginData(login: FormGroup) {
    console.log(this.login.value);
    this._http.get("http://localhost:3000/signup", this.login.value)
      .subscribe((res:any) => {
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

      }, err => {
        alert("something went wrong");
      }
      )
  }
}
