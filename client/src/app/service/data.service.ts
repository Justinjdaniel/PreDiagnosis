import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private _dataUrl = "http://localhost:3000/data";

  constructor(private http:HttpClient) { }
  
  newData(detail){
    return this.http.post('http://localhost:3000/data/add',{"symptomData":detail})
    .subscribe((data) => {console.log(data['error'])});
  }

  getDatas(){
    return this.http.get(this._dataUrl);
  }

  editData(id){
    return this.http.get(`${this._dataUrl}/edit/${id}`);
  }

  updateData(sympiAt, symptom, cause, recom, suggWeb, id){
    const sData = {
      sympiAt, symptom, cause, recom,suggWeb
    };
    return this.http.post(`${this._dataUrl}/update/${id}`, sData)
    .subscribe((data)=> {console.log(data)});
  }

  deleteData(id){
    return this.http.delete(`${this._dataUrl}/delete/${id}`);
  }

  checkData(sympiAt,symptom){
    const cData ={sympiAt, symptom}
    return this.http.post('http://localhost:3000/data/check',cData);
  }

}
