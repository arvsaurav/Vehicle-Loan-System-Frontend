import { Component, OnInit } from '@angular/core';

declare function reset(): any;

declare function calculation(): any;

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  loan: number = 100000;
  interest: number = 7;
  years: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  pri() {
    return this.loan;
  }
  fun() {
    var n = this.years * 12;
    var r = this.interest / 12 / 100;
    var x = Math.pow((1 + r), n);
    var c = this.loan * r * (x / (x - 1));
    var p = c.toFixed();
    return parseInt(p);
  }

  ins() {
    var i = this.fun();
    var interestAmount = (i * (this.years * 12)) - this.loan;
    return interestAmount;

  }
  total() {
    var a = this.ins();
    var t = this.loan + a;
    return t;
  }



}
