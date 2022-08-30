import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../application/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  baseURL:string="http://localhost:8081";


  constructor(private httpSer:HttpClient) { }
  

  public addApplicant(e:Application):Observable<Object>{
    console.log(e);
    console.log(this.httpSer.post<any>(this.baseURL+'/addapplicant' ,e))
    return this.httpSer.post<any>(this.baseURL +'/addapplicant' ,e);

  }
  public addApp1(e:Application):Observable<Object>{
    console.log(e);
    console.log(this.httpSer.post<any>(this.baseURL+'/addaddress' ,e))
    return this.httpSer.post<any>(this.baseURL +'/addaddress' ,e);

  }
  public addApp2(e:Application):Observable<Object>{
    console.log(e);
    console.log(this.httpSer.post<any>(this.baseURL+'/addapplicant' ,e))
    return this.httpSer.post<any>(this.baseURL +'/addapplicant' ,e);

  }
  public addApp3(e:Application):Observable<Object>{
    console.log(e);
    console.log(this.httpSer.post<any>(this.baseURL+'/addvehicle' ,e))
    return this.httpSer.post<any>(this.baseURL +'/addvehicle' ,e);

  }
  public addApp4(e:Application):Observable<Object>{
    console.log(e);
    console.log(this.httpSer.post<any>(this.baseURL+'/addloan' ,e))
    return this.httpSer.post<any>(this.baseURL +'/addloan' ,e);

  }
}
