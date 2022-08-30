import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { App2Component } from './application/app2/app2.component';
import { App3Component } from './application/app3/app3.component';
import { App4Component } from './application/app4/app4.component';
import { App5Component } from './application/app5/app5.component';
import { ApplicationComponent } from './application/application.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';


const appRoute: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component: HomeComponent},
  {path:'about-us',component: AboutUsComponent},
  {path:'emi-calculator',component: EmiCalculatorComponent},
  {path:'apply-loan',component: ApplyLoanComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'forgotpassword',component: ForgotpasswordComponent},
  {path:'userdashboard',component: UserdashboardComponent},
  {path:'adminlogin',component: AdminloginComponent},
  {path:'admindashboard',component: AdmindashboardComponent},
  {path:'allusers',component: AllusersComponent},
  {path:'allapplicants',component: AllapplicantsComponent},
  {path:'userdashboardloan',component: UserdashboardloanComponent},
  {path:'loanoffer',component:LoanOfferComponent},
  {path:'eligibility',component:EligibilityComponent},
  {path:'application',component:ApplicationComponent},
  {path:'app1',component:App1Component},
  {path:'app2',component:App2Component},
  {path:'app3',component:App3Component},
  {path:'app4',component:App4Component},
  {path:'app5',component:App5Component},

]

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
    App2Component,
    App3Component,
    App4Component,
    App5Component,
    HomeComponent,
    App1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
