import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { DataModel } from '../edit-data/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  sDatas: DataModel[];

  constructor(private dataService: DataService, private router: Router) { }

  deleteData(id,index){
    this.dataService.deleteData(id)
    .subscribe((data)=> {
      console.log(data);
      alert('Symptom Data Removed Successfully');
      this.sDatas.splice(index,1);
      this.router.navigate(['data/edit']);
    });
  }

  ngOnInit(): void {
    this.dataService
    .getDatas()
    .subscribe((data)=>{
      this.sDatas = JSON.parse(JSON.stringify(data));
    });

  }

}
