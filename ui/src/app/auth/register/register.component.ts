import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { UserProfileService } from 'src/app/core/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

 // Login Form
 signupForm!: UntypedFormGroup;
 submitted = false;
 successmsg = false;
 error = '';
 // set the current year
 year: number = new Date().getFullYear();

 constructor(private formBuilder: UntypedFormBuilder, private router: Router,
   private authenticationService: AuthenticationService,
   private userService: UserProfileService) { }

 ngOnInit(): void {
   /**
    * Form Validatyion
    */
    this.signupForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     name: ['', [Validators.required]],
     password: ['', Validators.required],
   });
 }

 // convenience getter for easy access to form fields
 get f() { return this.signupForm.controls; }

 /**
  * Register submit form
  */
  onSubmit() {
   this.submitted = true;
   
   //Register Api
   this.authenticationService.register(this.f['email'].value, this.f['name'].value, this.f['password'].value).pipe(first()).subscribe(
     (data: any) => {
     this.successmsg = true;
     if (this.successmsg) {
       this.router.navigate(['/auth/login']);
     }
   },
   (error: any) => {
     this.error = error ? error : '';
   });

 }
}
