import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8081/";

  public addVehicle(vehicleData: any) {
    return this.http.post(this.baseUrl + "addvehicle", vehicleData);
  }

  getAllVehicles(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "vehicles");
  }

  getVehicleById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "vehicle/" + id);
  }
}
