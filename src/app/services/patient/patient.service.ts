import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Patient } from '../../modules/patient/patient';

const API_URL = `${environment.apiUrl}/patients`;

@Injectable()
export class PatientService {
  constructor(protected http: HttpClient) { }
  
  public getAll(): Observable<Patient[]> {
    return this.http.get<any[]>(API_URL)
  }

  public getById(id: String): Observable<Patient> {
    return this.http.get<any>(`${API_URL}/${id}`)
  }
}
