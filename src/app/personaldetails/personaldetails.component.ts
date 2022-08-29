import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  public applicantForm !: FormData

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.applicantForm);
  }

}
