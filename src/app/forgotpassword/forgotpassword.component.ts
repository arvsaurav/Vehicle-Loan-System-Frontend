import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public forgotpasswordForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.forgotpasswordForm  = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }

  forgotpassword() {
    this.http.get<any>("http://localhost:8081/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userId == this.forgotpasswordForm.value.userId
      });
      if(user) {
        this.http.post<any>("http://localhost:8081/adduser", this.forgotpasswordForm.value)
        .subscribe(res=>{
        alert("Password changed sucessfully!");
        this.forgotpasswordForm.reset();
        this.router.navigate(['login']);
        }, err=>{
          alert("Something went wrong!");
        })    
      }
      else {
        alert("User doesn't exists!");
      }
    }, err=>{
      alert("Something went wrong!");
    })
  }

}
