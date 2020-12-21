import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { DataModel } from '../edit-data/data.model';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  title:String ="Add Data";

  constructor(private router: Router,private dataService:DataService) { }
  
  sData = new DataModel(null,null,null,null,null);

  ngOnInit(): void {
  }
  
  AddData(){
    this.dataService.newData(this.sData);
    console.log("Added");
    alert("Symptom Data Added Successfully");
    this.router.navigate(['data/edit']);
  }

}
