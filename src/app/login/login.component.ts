import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const AUTH_TOKEN_KEY = "auth-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: [''],
      password: ['']
    })
  }

  onSubmit() {

    const user = this.userService.getAllUsers();
    user.subscribe(res => {
      const u = res.find((a: any) => {
        return a.userId == this.loginForm.value.userId && a.password == this.loginForm.value.password
      });
      if(u) {
        // u is authData
        alert("Login successful!");
        //console.log(u);
        sessionStorage.setItem('key', JSON.stringify(u));
        //var item = JSON.parse(sessionStorage.getItem('key') || '{}');
        //console.log(item);
        this.loginForm.reset();
        this.router.navigate(['userdashboard']);
      }
      else {
        alert("Invalid credentials!");
        this.loginForm.reset();
      }
    })
  }

}