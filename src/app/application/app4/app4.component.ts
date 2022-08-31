import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { app4 } from '../Application';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {

  appForm4!: FormGroup;
  u!: app4;
  constructor(private fb: FormBuilder, private appSer: ApplicationService, private router: Router) { }

  ngOnInit(): void {
    this.appForm4 = this.fb.group({
      accountType: ['', Validators.required],
      amount: ['', Validators.required],
      loanTenure: ['', Validators.required],
      rateOfInterest: ['', Validators.required],
      emi: ['', Validators.required],
    })
  }
  onSubmit() {
    var item = JSON.parse(sessionStorage.getItem('key') || '{}');
    console.log(item);
    this.u = this.appForm4.value;
    this.u.userId = item.userId;
    this.u.loanStatus = "Pending"
    this.appSer.addApp4(this.u).subscribe((data: any) => {
      alert("Form Submitted!");
      console.log(this.appForm4.value)
    });
    this.router.navigate(['userdashboard']);

  }
  onBack() {
    this.router.navigate(['app3']);

  }

}
