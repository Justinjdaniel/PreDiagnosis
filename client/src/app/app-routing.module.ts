import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin/admin.guard';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component'
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'loginAdmin',component:AdminLoginComponent},
  {path:'diagnosis',component:DiagnosisComponent,canActivate:[AuthGuard]},
  {path:'doctors',component:DoctorsComponent,canActivate:[AuthGuard]},
  {path:'doc/add',component:AddDoctorComponent,canActivate:[AdminGuard]},
  {path:'doc/edit',component:EditDoctorComponent,canActivate:[AdminGuard]},
  {path:'doc/edit/update/:id',component:UpdateDoctorComponent,canActivate:[AdminGuard]},
  {path:'data/add',component:AddDataComponent,canActivate:[AdminGuard]},
  {path:'data/edit',component:EditDataComponent,canActivate:[AdminGuard]},
  {path:'data/edit/update/:id',component:UpdateDataComponent,canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
