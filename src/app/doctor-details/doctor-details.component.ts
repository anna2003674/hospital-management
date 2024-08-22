import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent implements OnInit {

  id: number;
  doctor: Doctor
  constructor(private route: ActivatedRoute,
    private doctorService: DoctorService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.doctor = new Doctor();
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor = data;
    });

  }

}
