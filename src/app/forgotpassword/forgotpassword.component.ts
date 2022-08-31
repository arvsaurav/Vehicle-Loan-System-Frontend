import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public forgotpasswordForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private userService : UserService) { }

  ngOnInit(): void {
    this.forgotpasswordForm  = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }

  updatePassword() {
    this.userService.getAllUsers().subscribe((res)=> {
        const user = res.find((a:any)=>{
          return a.userId == this.forgotpasswordForm.value.userId
        });
        if(user) {
          this.userService.updateUserById(this.forgotpasswordForm.value.userId, this.forgotpasswordForm.value).subscribe((res)=>{
            alert("Password changed successfully!");
            this.forgotpasswordForm.reset();
            this.router.navigate(['login']);
          }
        )}
        else {
          alert("User doesn't exists!");
          this.forgotpasswordForm.reset();
        }
    })
  }

}
