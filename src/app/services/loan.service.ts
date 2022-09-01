import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8081/";

  addLoan(loan: any) {
    return this.http.post<any>(this.baseUrl + "addloan", loan);
  }

  getAllLoans(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "loans");
  }

  updateLoanById(id: number, loan: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + "addloan/" + id, loan);
  }

  getLoanById(id: number) {
    return this.http.get<any>(this.baseUrl + "loan/" + id);
  }

  getLoanByUserId(userId: number): Observable<any> {
    return this.http.get(this.baseUrl + "loanByUserId/" + userId);
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "loan/" + id);
  }

}
