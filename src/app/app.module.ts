import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllapplicantsComponent } from './allapplicants/allapplicants.component';
import { UserdashboardloanComponent } from './userdashboardloan/userdashboardloan.component';
import { App1Component } from './application/app1/app1.component';
import { App3Component } from './application/app3/app3.component';
import { App4Component } from './application/app4/app4.component';
import { ApplicationComponent } from './application/application.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    EmiCalculatorComponent,
    ApplyLoanComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    UserdashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AllusersComponent,
    AllapplicantsComponent,
    UserdashboardloanComponent,
    LoanOfferComponent,
    EligibilityComponent,
    ApplicationComponent,
    App3Component,
    App4Component,
    HomeComponent,
    App1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
