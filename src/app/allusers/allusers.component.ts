import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  userDetails = null;

  constructor(private userService: UserService) {
    this.getUserDetails();
  }

  ngOnInit(): void {

  }

  getUserDetails() {
    this.userService.getAllUsers().subscribe(
      (res) => {
        this.userDetails = res;
      })
  }
}
