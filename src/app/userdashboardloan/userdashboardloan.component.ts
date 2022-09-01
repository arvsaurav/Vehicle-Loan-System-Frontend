import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { LoanService } from '../services/loan.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-userdashboardloan',
  templateUrl: './userdashboardloan.component.html',
  styleUrls: ['./userdashboardloan.component.css']
})
export class UserdashboardloanComponent implements OnInit {

  applicantById=null;
  addressById=null;
  loanById=null;
  vehicleById = null;

  constructor(private userService : UserService, private loanService : LoanService, private vehicleService : VehicleService, private addressService : AddressService) { 
    var item = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getApplicantByUserId(item.userId);
    this.getAddressByUserId(item.userId);
    this.getLoanByUserId(item.userId);
    this.getVehicleByUserId(item.userId);
  }

  ngOnInit(): void {
  }

  getApplicantByUserId(userId : number) {
    this.userService.getApplicantByUserId(userId).subscribe(data=>
      {
        this.applicantById = data;
        console.log(data);
        console.log(this.applicantById);
      })
  }

  getAddressByUserId(userId : number) {
    this.addressService.getAddressByUserId(userId).subscribe(data =>
      {
        this.addressById = data;
        console.log(data);
      })
  }

  getLoanByUserId(userId : number) {
    this.loanService.getLoanByUserId(userId).subscribe(data =>
      {
        this.loanById = data;
        console.log(data);
      })
  }

  getVehicleByUserId(userId : number) {
    this.vehicleService.getVehicleByUserId(userId).subscribe(data =>
      {
        this.vehicleById = data;
        console.log(data);
      })
  }

}
