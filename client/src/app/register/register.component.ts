import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;  
  registeredUser = {fullName:'', email:'', password:''};

  constructor(private _auth:AuthService, private _router:Router, private formB: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.formB.group({
      fullName: new FormControl ('',[Validators.required]),
      email: new  FormControl('',[ Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl ('',[ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]),
      confirmPassword: new FormControl ('',[ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]),
      TnC: new FormControl ('',[Validators.required])
    },{
      validator: this.checkPassword
    });
  }

  checkPassword(group: FormGroup){
    let pass = group.get('password').value, confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null: {notSame:true}
  }

  registerUser(){
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['login'])
      },
      err=>console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
