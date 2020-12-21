import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';
import { DoctorModel } from '../doctors/doctor.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  title:String ="Add Doctor";

  constructor(private router: Router,private docService:DoctorService) { }

  doc= new DoctorModel(null,null,null,null,null,null,null);

  ngOnInit(): void {
  }

  AddDoctor(){
    this.docService.newDoctor(this.doc);
    console.log("Added");
    alert("Doctor Details Added Successfully");
    this.router.navigate(['doc/edit']);
  }

}
