import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Notification } from '../../modules/notification/notification'

const API_URL = `${environment.apiUrl}/notification`;

@Injectable()
export class NotificationService {
  constructor(protected http: HttpClient) { }
  
  public getAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_URL)
  }

  public add(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(API_URL, notification)
  }
}
