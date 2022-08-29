import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private http: HttpClient, private formGroup: FormGroup) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }

  // onSubmit() {
  //   console.log(this.signupForm.value);
  //   const isUser = this.userService.getUserById(this.signupForm.value.userId);
  //   console.log(isUser);
  //   // if(isUser == null) {
  //     const user = this.userService.addUser(this.signupForm.value);
  //     this.signupForm.reset();
  //     this.router.navigate(['login']);
  //   // }
  //   // else {
  //   //   alert("User already exists!");
  //   // }

  // }

  onSubmit() {
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
