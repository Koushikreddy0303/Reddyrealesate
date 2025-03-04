import { Router } from '@angular/router';
import { AuthUserService } from './../../service/auth-user.service';
import { UserServiceService } from './../../service/user-service.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private userserive:UserServiceService,private authservice:AuthUserService, private route:Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {

      console.log(this.loginForm);
      const valid=this.authservice.authUser(this.loginForm.value);
      if(valid )
      {
        console.log(valid);
        localStorage.setItem('token',valid.name);
        this.userserive.alertifySuccess("Logged In Succesfully");
        this.route.navigate(['/']);
      }else
      {
         this.userserive.alertifyError("logged in failed");
      }
    }else{
      this.userserive.alertifyWarning("please fill detauils");
    }
  }

}
