import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { UserService } from '../services/user.service';
import { Application } from './Application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  appForm!: FormGroup;

  u!: Application; //= {userId:1, name:"a", age:1, gender:"a", phoneNo:1, emailId:"a", password:"a"};

  constructor(private fb: FormBuilder, private appSer: ApplicationService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.appForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNo: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      employment: ['', Validators.required],
      existingEmi: ['', Validators.required],
      salary: ['', Validators.required],
      aadharNo: ['', Validators.required],
      panNo: ['', Validators.required]
    })
  }
  onSubmit() {
    var item = JSON.parse(sessionStorage.getItem('key') || '{}');
    console.log(item);
    this.u = this.appForm.value;
    this.u.userId = item.userId;
    this.userService.addApplicant(this.u).subscribe((data: any) => {
      alert("Personal details updated");
      console.log(this.appForm.value)
    });
    this.router.navigate(['app1']);

  }
  onBack() {

    this.router.navigate(['loanoffer']);

  }

}
