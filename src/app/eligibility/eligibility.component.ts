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

  onSubmit() {

    this.router.navigate(['loanoffer']);
  }

}
