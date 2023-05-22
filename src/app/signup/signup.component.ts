import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup:FormGroup|any
  signuser:any
  constructor(private _http : HttpClient , private _route:Router) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }
  
  signupdata(signup:FormGroup){
    console.log(this.signup.value);
    this.signuser = signup.value.firstname;
    this._http.post("http://localhost:3000/signup",this.signup.value)
    .subscribe((result:any)=>{
      alert("YOU ARE SUCCESSFULLY REGISTERED")
      this.signup.reset({})
      this._route.navigate(['login']);
    },err=>{
      alert("something went wrong");
    }

    )
  }

}