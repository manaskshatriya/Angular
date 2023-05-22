//file responsible for defining the module and its dependencies, including components, modules, and services required for your Angular application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ //decorator that marks a class as an Angular module, used to define the metadata for the module defined below
  declarations: [ //specifies the components, directives, and pipes that belong to the module as part of module
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [ //modules that are required by the module
    BrowserModule, //provides essential services and directives needed for browser rendering
    AppRoutingModule,
    ReactiveFormsModule, //provides support for building reactive forms in Angular
    HttpClientModule //provides HTTP client services for making API calls
  ],
  providers: [], //register services or dependencies that are available for injection within the module
  bootstrap: [AppComponent] //specifies the root component (AppComponent here) that is used to bootstrap the application
})
export class AppModule { }
