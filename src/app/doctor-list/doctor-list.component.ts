import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импорт CommonModule
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { HttpClientModule } from '@angular/common/http'; // Импортируем HttpClientModule
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];

  constructor(private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }


  private getDoctors() {
    this.doctorService.getDoctorList().subscribe(data => {
      console.log('Doctors data:', data);
      this.doctors = data;
    });
  }

  updateDoctor(id: number) {
    this.router.navigate(['update-doctor', id]);
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe(data => {
      console.log(data);
      this.getDoctors();
    })
  }

  doctorDetails(id: number) {
    this.router.navigate(['doctor-details', id]);
  }


  viewPatients(id: number) {
    this.router.navigate(['doctor', id, 'patients']);
  }

}
