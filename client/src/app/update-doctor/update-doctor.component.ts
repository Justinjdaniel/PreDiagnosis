import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  title: string ="Update Doctor Dteails"
  doctor: any = {};

  constructor(private docService: DoctorService,private route: ActivatedRoute, private router: Router) { }

  updateDoctor(docName, docDeg, clinicName, phone, website, starRating, imageUrl){
    this.route.params.subscribe(params =>{
      this.docService.updateDoctor(docName, docDeg, clinicName, phone, website, starRating, imageUrl, params.id);
      alert('Doctor Details Updated Successfully');
      this.router.navigate(['doc/edit']);
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.docService.editDoctor(params[`id`]).subscribe(res =>{
      this.doctor =res;
      });
    });
  }

}
