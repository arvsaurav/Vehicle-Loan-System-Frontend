import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {
  appForm3!:FormGroup;
  constructor(private fb:FormBuilder,private appSer:ApplicationService, private router:Router) { }

  ngOnInit(): void {
    this.appForm3 = this.fb.group({
      manufacturer:['', Validators.required],
      model:['', Validators.required],
      exShowroomPrice:['', Validators.required],
    })
  }
  onSubmit(){
    this.appSer.addApp3(this.appForm3.value).subscribe((data:any) =>{
    alert("Vehicle details updated");
    console.log(this.appForm3.value)});
    this.router.navigate(['app4']);

}
onBack(){
  this.router.navigate(['app2']);

}

}
