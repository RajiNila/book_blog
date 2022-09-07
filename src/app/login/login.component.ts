import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata:FormGroup;
  hide = true;

  constructor(private formbuilder:FormBuilder) {
    this.formdata=this.formbuilder.group({
      email: new FormControl('', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]) ),
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]) ),
    })
   }
   get f(){
    return this.formdata.controls;
   
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.formdata.valid){           
      return;
    }   
  }

}
