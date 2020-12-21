import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { DoctorModel } from './doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
doctors: DoctorModel[];
showDetails: boolean =false;

  constructor(private docService: DoctorService) { }

toggleExpand(): void{
  this.showDetails = !this.showDetails;
}

  ngOnInit(): void {
    this.docService
    .getDoctors()
    .subscribe((data)=>{
      this.doctors=JSON.parse(JSON.stringify(data));
    });
  }

}