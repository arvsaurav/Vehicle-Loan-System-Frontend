import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }

  // signUp() {
  //   this.http.post<any>("http://localhost:8081/adduser", this.signupForm.value)
  //   .subscribe(res=>{
  //     alert("Signup Successfull.");
  //     this.signupForm.reset();
  //     this.router.navigate(['login']);
  //   }, 
  //   err=>{
  //     alert("Something went wrong!");
  //   })
  // }

  signUp() {
    this.http.get<any>("http://localhost:8081/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userId == this.signupForm.value.userId
      });
      if(user) {
        alert("User already exists!");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }
      else {
        this.http.post<any>("http://localhost:8081/adduser", this.signupForm.value)
        .subscribe(res=>{
        alert("Signup Successful!");
        this.signupForm.reset();
        this.router.navigate(['login']);
        }, err=>{
          alert("Something went wrong!");
        })    
      }
    }, err=>{
      alert("Something went wrong!");
    })
  }

}
