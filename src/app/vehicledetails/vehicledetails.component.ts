import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {

  constructor(private vehicleService : VehicleService) { }

  ngOnInit(): void {
  }

  register(registerForm:any) {
    this.vehicleService.addVehicle(registerForm.value).subscribe(
    (res) => {
      alert("Vehicle added!")
    },
    (err) => {
      alert("Something went wrong!");
    }
    );
  }

}
