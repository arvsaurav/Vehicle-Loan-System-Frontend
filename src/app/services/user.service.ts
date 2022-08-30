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

  getApplicantById(userId: number) : Observable<any> {
    return this.http.get(this.baseUrl+"applicant/"+userId);
  }

  // addUser(user: User) : Observable<any>{
  //   return this.http.post<any>(this.baseUrl+"adduser", user);
  // }

  getAllApplicants() : Observable<any> {
    return this.http.get<any>(this.baseUrl+"applicants");
  }

}

// export class User {
//   private
//   private userId !: number;
//   private password !: String;
// }
