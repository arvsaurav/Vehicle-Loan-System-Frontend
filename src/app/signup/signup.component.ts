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

  userDetails = null;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }

  verifyUser() {
    this.userService.getAllUsers().subscribe((res)=> {
        const user = res.find((a:any)=>{
          return a.userId == this.signupForm.value.userId
        });
        if(user) {
          alert("User already exists!");
          this.signupForm.reset();
          this.router.navigate(['login']);
        }
        else {
          this.addUser(this.signupForm.value);
        }
    })
  }

  addUser(user:any) {
    this.userService.addUser(user).subscribe((res)=>{
        alert("Signup Successful!");
        this.signupForm.reset();
        this.router.navigate(['login']);
    })
  }

}
