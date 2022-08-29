import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      adminId: [''],
      password: ['']
    })
  }

  onSubmit() {
    if (this.loginForm.value.adminId == 1 && this.loginForm.value.password == "admin") {
      alert("Admin Login successful!");
      this.loginForm.reset();
      this.router.navigate(['admindashboard']);
    }
    else {
      alert("Invalid credentials!");
      this.loginForm.reset();
    }
  }

}
