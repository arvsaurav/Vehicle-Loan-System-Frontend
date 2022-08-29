import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
        alert("Login successful!");
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