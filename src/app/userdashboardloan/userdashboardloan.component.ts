import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-userdashboardloan',
  templateUrl: './userdashboardloan.component.html',
  styleUrls: ['./userdashboardloan.component.css']
})
export class UserdashboardloanComponent implements OnInit {

  applicantById:any[]=[];
  loanById=null;
  vehicleById = null;

  constructor(private userService : UserService, private loanService : LoanService, private vehicleService : VehicleService) { 
    var item = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getApplicantById(item.userId);
    // this.getLoanById(   );
    // this.getVehicleById(   );
  }

  ngOnInit(): void {
  }

  getApplicantById(userId : number) {
    this.userService.getApplicantById(userId).subscribe(data=>
      {
        this.applicantById.push(data);
        console.log(data);
      })
  }

}
