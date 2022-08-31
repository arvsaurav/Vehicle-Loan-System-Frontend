import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "http://localhost:8081/";

  getAllUsers() : Observable<any> {
    return this.http.get<any>(this.baseUrl+"users");
  }

  getUserById(id: number) : Observable<any> {
    return this.http.get(this.baseUrl+"user/"+id);
  }

  updateUserById(id:number, user:any) {
    return this.http.put(this.baseUrl+"user/"+id, user);
  }

  getApplicantById(userId: number) : Observable<any> {
    return this.http.get(this.baseUrl+"applicant/"+userId);
  }

  addUser(user: any) : Observable<any>{
    return this.http.post<any>(this.baseUrl+"adduser", user);
  }

  getAllApplicants() : Observable<any> {
    return this.http.get<any>(this.baseUrl+"applicants");
  }

  getLoanByApplicantId(applicantId : number) : Observable<any> {
    return this.http.get(this.baseUrl+"loanByApplicantId/"+applicantId);
  }

  addApplicant(applicant:any) : Observable<any> {
    return this.http.post<any>(this.baseUrl+"addapplicant", applicant);
  }

}

