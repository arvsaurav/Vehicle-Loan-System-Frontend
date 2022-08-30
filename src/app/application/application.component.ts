import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  appForm!:FormGroup;

  constructor(private fb:FormBuilder,private appSer:ApplicationService, private router:Router) { }

  ngOnInit(): void {
    this.appForm = this.fb.group({
      name:['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required],
      phoneNo:['', Validators.required],
      emailId:['', Validators.required],
      password:['', Validators.required]

    })
  }
  onSubmit(){
    this.appSer.addApplicant(this.appForm.value).subscribe((data:any) =>{
    alert("personel details updated");
    console.log(this.appForm.value)});
    this.router.navigate(['app1']);

}
onBack(){
  
  this.router.navigate(['loanoffer']);

}

}
