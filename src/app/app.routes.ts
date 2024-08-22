import { Routes } from '@angular/router';
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ListPatientsCertainDoctorComponent } from './list-patients-certain-doctor/list-patients-certain-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

export const routes: Routes = [
    { path: 'doctors', component: DoctorListComponent },
    { path: 'create-doctors', component: CreateDoctorComponent },
    { path: '', redirectTo: 'doctors', pathMatch: 'full' },
    { path: 'update-doctor/:id', component: UpdateDoctorComponent },
    { path: 'doctor-details/:id', component: DoctorDetailsComponent },
    { path: 'doctor/:id/patients', component: ListPatientsCertainDoctorComponent },
    { path: 'doctor/:id/create-patient', component: CreatePatientComponent }
];
