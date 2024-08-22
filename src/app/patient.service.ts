import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/v1/doctors";

  constructor(private httpClient: HttpClient) { }

  getPatientsByDoctorId(doctorId: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}/${doctorId}/patients`);
  }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${patient.doctorId}/patients`, patient);
  }

  deletePatient(doctorId: number, patientId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${doctorId}/patients/${patientId}`);
  }

}
