import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoctorListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-management';
}



