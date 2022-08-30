import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  appForm2!:FormGroup;
  constructor(private fb:FormBuilder,private appSer:ApplicationService, private router:Router) { }

  ngOnInit(): void {
    this.appForm2 = this.fb.group({
    employment:['', Validators.required],
	  existingEmi:['', Validators.required],
	  salary:['', Validators.required],
  })
  }
  onSubmit(){
    this.appSer.addApp2(this.appForm2.value).subscribe((data:any) =>{
    alert("Employment details updated");
    console.log(this.appForm2.value)});
    this.router.navigate(['app3']);

}
onBack(){
  this.router.navigate(['app1']);

}

}
