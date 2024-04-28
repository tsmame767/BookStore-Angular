import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: {
    class: 'app-signup-cnt'
  }  
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]], // Updated to include password length validation
      mobileNumber: ['', [Validators.required, Validators.pattern('^[1-9]\\d{9}$')]], // Mobile number validation added
      role: ['', Validators.required] // Role field added with required validation
    });
  }

  get formControls() { return this.registerForm.controls; }

  handleRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { firstName, lastName, email, password, mobileNumber, role } = this.registerForm.value;

    // Call your register service or handle registration logic here
    this.userService.registerApi({
      name: `${firstName} ${lastName}`,
      email: email,
      phone: mobileNumber,
      password: password,
      role: role
    }).subscribe( results =>{console.log(results)},error=>{console.log(error)});

    // display form values on success
    console.log('Registration done!');
    console.log(this.registerForm.value);   
    this.handleSignIn();   
}

handleSignIn(){
  this.router.navigate(['']);
}
}