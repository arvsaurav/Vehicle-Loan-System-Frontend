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
  {path:'admindashboard',component: AdmindashboardComponent}

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
    AdmindashboardComponent
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
