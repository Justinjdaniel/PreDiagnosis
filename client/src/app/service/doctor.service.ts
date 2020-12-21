import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private _doctorUrl = "http://localhost:3000/doc";

  constructor(private http:HttpClient) { }

  newDoctor(detail){
    return this.http.post('http://localhost:3000/doc/add',{"doctor":detail})
    .subscribe((data) => {console.log(data['error'])});
  }

  getDoctors(){
    return this.http.get(this._doctorUrl);
  }

  editDoctor(id){
    return this.http.get(`${this._doctorUrl}/edit/${id}`);
  }

  updateDoctor(docName, docDeg, clinicName, phone, website, starRating, imageUrl, id){
    const doc = {
      docName, docDeg, clinicName, phone, website, starRating, imageUrl
    };
    return this.http.post(`${this._doctorUrl}/update/${id}`, doc)
    .subscribe((data)=> {console.log(data)});
  }


  deleteDoctor(id){
    return this.http.delete(`${this._doctorUrl}/delete/${id}`);
  }

}
