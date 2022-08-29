import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }

  login() {
    this.http.get<any>("http://localhost:8081/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userId == this.loginForm.value.userId && a.password == this.loginForm.value.password
      });
      if(user) {
        alert("Login successful!");
        this.loginForm.reset();
        this.router.navigate(['apply-loan']);
      }
      else {
        alert("Invalid credentials!");
      }
    }, err=>{
      alert("Something went wrong!");
    })
  }

}
