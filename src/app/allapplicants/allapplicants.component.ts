import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-allapplicants',
  templateUrl: './allapplicants.component.html',
  styleUrls: ['./allapplicants.component.css']
})
export class AllapplicantsComponent implements OnInit {

  applicantDetails = null;
  loanDetails = null;
  vehicleDetails = null;

  constructor(private userService : UserService, private loanService : LoanService, private vehicleService : VehicleService) { 
    this.getAllApplicants();
    this.getAllVehicles();
    this.getAllLoans();
  }

  ngOnInit(): void {
  }

  getAllApplicants() {
    this.userService.getAllApplicants().subscribe(
      (res)=>{
              this.applicantDetails = res;
              //this.applicantDetails.applicantId=1;
    })
  }

  getAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe(
      (res)=>{
              this.vehicleDetails = res;
    })
  }

  getAllLoans() {
    this.loanService.getAllLoans().subscribe(
      (res)=>{
              this.loanDetails = res;
    })
  }

  onApprove(id:number,loan:any) {
    loan.loanStatus="Approved";
    console.log(loan);
    this.loanService.updateLoanById(id, loan).subscribe(
      (res)=>{
        this.loanDetails = res;
      }
    )
    alert("Loan Approved!");
  }

  onReject(id:number, loan:any) {
    loan.loanStatus="Rejected";
    console.log(loan);
    this.loanService.updateLoanById(id, loan).subscribe(
      (res)=>{
        this.loanDetails = res;
      }
    )
    alert("Loan Rejected!");
  }
}
