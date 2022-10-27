import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignIn } from 'src/app/models/data-type';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import validateForm from '../validator/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private user:FoodsDataService) { }
  emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  passwordRegex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

  ngOnInit(): void {
    this.user.reloadUser();
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }
     
    )
  }
  signIn(data:SignIn):void{
    if(this.loginForm.valid){
      console.log(data);
      this.user.userSignIn(data);
      this.loginForm.reset();

    }else{
      validateForm.validateAllFormFields(this.loginForm);
    }

    
  }
   // Hide And Show Password
type:string ="password";
isText:boolean = false;
eyeIcon :string = "fa-eye-slash"
hideshow(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon ="fa-eye":this.eyeIcon ="fa-eye-slash";
  this.isText ? this.type ="text":this.type ="password"
}


}
