import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  angForm: FormGroup;
  adminLoginDetails={email:'',password:''};

  constructor(private _auth:AuthService, private _router:Router, private formB: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm = new FormGroup({
      email: new  FormControl('',[ Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl ('',[ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)])
    });
  }

  adminLogin(){
    this._auth.adminLogin(this.adminLoginDetails)
    .subscribe(
      res=>{
        localStorage.setItem('token',res['token'])
        this._router.navigate([''])
      },
      err=>{console.log(err);
      alert(err['error']);
    }
    )
  }

  ngOnInit(): void {
  }

}
