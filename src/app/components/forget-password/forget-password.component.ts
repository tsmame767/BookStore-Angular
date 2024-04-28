import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  
  constructor( private userService:UserService, private formBuilder: FormBuilder, private  router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
         });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  handleLogin() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const {email}= this.loginForm.value;

    this.userService.forgotPasswordApi({
      email : email,
    }).subscribe( results =>{localStorage.setItem("AuthToken", results.data)
    this.router.navigate(['/ResetPassword'])

    console.log(results);
     
    },error=>{console.log(error)});


    console.log('Password Send successfully On your Email', this.loginForm.value);
  }

  
  handleCreateAccount(){
    this.router.navigate(['/signup']);
  }
  
}