import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "http://localhost:8081/";

  getAllLoans() : Observable<any> {
    return this.http.get<any>(this.baseUrl+"loans");
  }

  updateLoanById(id:number, loan:any) : Observable<any>{
    return this.http.put<any>(this.baseUrl+"addloan/"+id, loan);
  }
  
}
