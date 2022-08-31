import { Component, OnInit } from '@angular/core';

declare function reset(): any;

declare function calculation(): any;

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onCalculate() {
    calculation();
  }

  onReset() {
    reset();
  }


}
