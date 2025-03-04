import { Router } from '@angular/router';
import { UserServiceService } from './../../service/user-service.service';
import { Component ,OnInit} from '@angular/core';

import { FormControl, FormGroup,Validators, AbstractControl, ValidationErrors, Form } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit  {
  registrationForm!: FormGroup;
  submitted:boolean=false;
  constructor(private userservice:UserServiceService, private route:Router){}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.passwordMatch });
  }
  passwordMatch(fg:any):Validators | null{
    return fg.controls['password']?.value===fg.controls['confirmPassword']?.value  ?  null: {notmatched:true};
  }


  onSubmit(): void {
    console.log('User Registered:', this.registrationForm);
    this.submitted=true;
    if(this.registrationForm.valid){
      this.userservice.addUser(this.registrationForm.value);
      this.submitted=false;
      this.registrationForm.reset();
      this.userservice.alertifySuccess("user Registered Successfully");
      this.route.navigate(["/login"]);
    }else{
      this.userservice.alertifyError("please give all details");
    }
  }

  get f() {
    return this.registrationForm.controls; // To easily access form controls
  }

}
