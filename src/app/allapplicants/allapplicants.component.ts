import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-allapplicants',
  templateUrl: './allapplicants.component.html',
  styleUrls: ['./allapplicants.component.css']
})
export class AllapplicantsComponent implements OnInit {

  applicantDetails = null;

  constructor(private userService : UserService) { 
    this.getAllApplicants();
  }

  ngOnInit(): void {
  }

  getAllApplicants() {
    this.userService.getAllApplicants().subscribe(
      (res)=>{
              this.applicantDetails = res;
    })
  }

}
