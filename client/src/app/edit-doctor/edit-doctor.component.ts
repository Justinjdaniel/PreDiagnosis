import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { DoctorModel } from '../doctors/doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  doctors: DoctorModel[];
  showDetails: boolean =false;

  constructor(private docService: DoctorService, private router: Router) { }

toggleExpand(): void{
  this.showDetails = !this.showDetails;
}

deleteDoctor(id,index){
  this.docService.deleteDoctor(id)
  .subscribe((data)=> {
    console.log(data);
    alert('Doctor Deltails Removed Successfully');
    this.doctors.splice(index,1);
    this.router.navigate(['doc/edit']);
  });
}

  ngOnInit(): void {
    this.docService
    .getDoctors()
    .subscribe((data)=>{
      this.doctors=JSON.parse(JSON.stringify(data));
    });

  }

}
