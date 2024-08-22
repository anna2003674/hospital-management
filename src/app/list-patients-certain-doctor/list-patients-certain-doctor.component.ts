import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-patients-certain-doctor',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-patients-certain-doctor.component.html',
  styleUrls: ['./list-patients-certain-doctor.component.css']
})
export class ListPatientsCertainDoctorComponent implements OnInit {

  patients: Patient[];
  doctorId: number;

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }

  loadPatients() {
    this.patientService.getPatientsByDoctorId(this.doctorId).subscribe(data => {
      this.patients = data;
    });
  }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];
    this.patientService.getPatientsByDoctorId(this.doctorId).subscribe(data => {
      console.log('Patients data:', data);
      this.patients = data;
    });
  }

  goToAddPatient() {
    this.router.navigate([`/doctor/${this.doctorId}/create-patient`]);
  }

  deletePatient(patientId: number) {
    this.patientService.deletePatient(this.doctorId, patientId).subscribe(() => {
      console.log('Patient deleted successfully');
      this.loadPatients(); 
    }, error => console.log(error));
  }
}
