import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

const API_URL = `${environment.apiUrl}/notification`;

@Injectable()
export class NotificationService {
  constructor(protected http: HttpClient) { }
  
  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL)
  }
}
