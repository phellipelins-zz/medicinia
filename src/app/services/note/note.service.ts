import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

const API_URL = `${environment.apiUrl}/notes`;

@Injectable()
export class NoteService {
  constructor(protected http: HttpClient) { }
  
  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL)
  }

  public getById(id): Observable<any> {
    return this.http.get<any>(`${API_URL}/${id}`)
  }
}
