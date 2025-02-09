import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
  }

  getOrderStatus(cargoId: any): Observable<any> {
    return this.http.get(`${this.serverName}/api/customer/cargo-status?cargoId=${cargoId}`, { headers: this.getHeaders() });
  }

  updateCargoStatus(newStatus: any, cargoId: any): Observable<any> {
    return this.http.put(`${this.serverName}/api/driver/update-cargo-status?cargoId=${cargoId}&newStatus=${newStatus}`, {}, { headers: this.getHeaders() });
  }

  assignDriver(driverId: any, cargoId: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/business/assign-cargo?cargoId=${cargoId}&driverId=${driverId}`, {}, { headers: this.getHeaders() });
  }

  getAssignOrders(driverId: any): Observable<any> {
    return this.http.get(`${this.serverName}/api/driver/cargo?driverId=${driverId}`, { headers: this.getHeaders() });
  }

  getCargo(): Observable<any> {
    return this.http.get(`${this.serverName}/api/business/cargo`, { headers: this.getHeaders() });
  }

  getDrivers(): Observable<any> {
    return this.http.get(`${this.serverName}/api/business/drivers`, { headers: this.getHeaders() });
  }

  addCargo(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/business/cargo`, details, { headers: this.getHeaders() });
  }

  Login(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/login`, details, { headers: this.getHeaders() });
  }

  registerUser(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/register`, details, { headers: this.getHeaders() });
  }
}

