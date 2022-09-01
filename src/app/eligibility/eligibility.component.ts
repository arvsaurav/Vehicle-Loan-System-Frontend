import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getEligibility(pr:any,em:any,ag:any,sal:any){
  
    sal=sal/12;
    sal=sal*0.6;
    sal=sal-em;
   
    if(pr>50000 && ag>21 && sal>0.02*pr){
     sessionStorage.setItem("pri",pr);
     sessionStorage.setItem("salary",sal);
     this.router.navigate(['loanoffer']);
   }
   else{
     alert("You are not eligible for the Loan");
     this.router.navigate(['userdashboard']);
   }
 
   }

  backToDashboard() {
    this.router.navigate(['userdashboard']);
  }
}
