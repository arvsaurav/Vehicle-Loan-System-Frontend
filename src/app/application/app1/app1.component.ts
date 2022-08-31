import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { app1 } from '../Application';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  appForm1!:FormGroup;

  u!:app1;

  constructor(private fb:FormBuilder,private appSer:ApplicationService, private router:Router) { }

  ngOnInit(): void {
    this.appForm1 = this.fb.group({
      state:['', Validators.required],
	    city:['', Validators.required],
	    area:['', Validators.required],
	    houseNo:['', Validators.required],
	    pinCode:['', Validators.required],
    })
  }
  onSubmit(){

    var item = JSON.parse(sessionStorage.getItem('key') || '{}');
    console.log(item);
    this.u = this.appForm1.value;
    this.u.userId = item.userId;
    this.appSer.addApp1(this.u).subscribe((data:any) =>{
    alert("Address details updated");
    console.log(this.appForm1.value)});
    this.router.navigate(['app3']);

}
onBack(){
  this.router.navigate(['application']);

}

}
