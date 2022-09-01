import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferComponent implements OnInit {

  amount!: any;
  processing!: number;
  rate!: number;
  emi!: any;
  tenure!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.amount = sessionStorage.getItem("pri");
    this.emi = sessionStorage.getItem("salary");
    this.emi = Math.ceil(this.emi);
    this.processing = 0.05 * this.amount;
    if (this.amount < 100000) {
      this.rate = 10;
    }
    else {
      this.rate = 8.9;
    }

    this.tenure = Math.ceil((((Math.log(this.emi)) - (Math.log((this.emi) - (this.amount * (this.rate / 1200))))) / (Math.log(1 + (this.rate / 1200)))));
  }
  onSubmit() {

    this.router.navigate(['/application']);
  }

  onBack() {
    this.router.navigate(['/eligibility']);
  }

}
