import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
 
  loginForm!: FormGroup;
  submitted = false;
  
  constructor( private userService:UserService, private formBuilder: FormBuilder, private  router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      otp:['',[Validators.required]]
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
    const {email,otp, password}= this.loginForm.value;

    this.userService.resetPsswordApi({
      email : email,
      otp: otp,
      newPassword : password
    }).subscribe( results =>{ console.log(results);
      
      this.router.navigate([''])
    },error=>{console.log(error)});


    console.log('Login successful', this.loginForm.value);
  }

  
  handleCreateAccount(){
    this.router.navigate(['/signup']);
  }
  handleForgetPassword(){
    this.router.navigate(['/ForgetPassword']);
  }
} 