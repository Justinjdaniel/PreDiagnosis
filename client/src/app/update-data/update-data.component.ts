import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  title: string ="Update Symptom Data"
  sData: any = {};

  constructor(private dataService: DataService,private route: ActivatedRoute, private router: Router) { }

  updateData(sympiAt, symptom, cause, recom, suggWeb){
    this.route.params.subscribe(params =>{
      this.dataService.updateData(sympiAt, symptom, cause, recom, suggWeb, params.id);
      alert('Symptom Data Updated Successfully');
      this.router.navigate(['data/edit']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.dataService.editData(params[`id`]).subscribe(res =>{
      this.sData = res;
      });
    });

  }

}
