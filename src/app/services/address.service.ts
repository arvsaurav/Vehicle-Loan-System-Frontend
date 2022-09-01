import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8081/";

  getAllAddress(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "addresses");
  }

  getAddressByUserId(userId: number): Observable<any> {
    return this.http.get(this.baseUrl + "addressByUserId/" + userId);
  }
}
