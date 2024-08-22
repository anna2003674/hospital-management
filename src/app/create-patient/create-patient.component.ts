import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctorId: number;

  constructor(private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];
    this.patient.doctorId = this.doctorId;
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();
    },
      error => console.log(error));
  }


  goToPatientList() {
    this.router.navigate(['/doctor', this.doctorId, 'patients']);
  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();
  }
}
