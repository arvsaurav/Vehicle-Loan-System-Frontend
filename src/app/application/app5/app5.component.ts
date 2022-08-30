import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app5',
  templateUrl: './app5.component.html',
  styleUrls: ['./app5.component.css']
})
export class App5Component implements OnInit {
  appForm5!:FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Application Submitted");
    this.router.navigate(['home']);

  }

  onBack(){
    this.router.navigate(['app4']);
  
  }

}
