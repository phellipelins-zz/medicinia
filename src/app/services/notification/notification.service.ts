import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

const API_URL = `${environment.apiUrl}/notification`;

@Injectable()
export class NotificationService {
  protected headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-apikey' : '69d03052a08ad4496ce4758478c0aafd085ab',
      'content-type': 'application/json',
      'cache-control': 'no-cache'
    });
  }
  
  public getAll() {
    return this.http.get(API_URL).toPromise();
  }
}
