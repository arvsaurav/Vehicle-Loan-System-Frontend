import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {

  appForm4!:FormGroup;
  constructor(private fb:FormBuilder,private appSer:ApplicationService, private router:Router) { }

  ngOnInit(): void {
    this.appForm4 = this.fb.group({
      amount:['', Validators.required],
      loanTenure:['', Validators.required],
      rateOfInterest:['', Validators.required],
    })
  }
  onSubmit(){
    this.appSer.addApp4(this.appForm4.value).subscribe((data:any) =>{
    alert("Loan details updated");
    console.log(this.appForm4.value)});
    this.router.navigate(['app5']);

}
onBack(){
  this.router.navigate(['app3']);

}

}
