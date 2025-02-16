import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
//   itemForm!: FormGroup;
//   //formModel: any = { role: null, email: '', password: '', username: '' };
//   showMessage: boolean = false;
//   responseMessage: any;
//   showError:boolean=false;
//   errorMessage:any;
//    roles:string[] = ['BUSINESS', 'DRIVER', 'CUSTOMER'];
//    formModel:any={role:''};

//   constructor(public router:Router, private httpService:HttpService, private formBuilder: FormBuilder) { 
    
//     this.itemForm = this.formBuilder.group({
//       email: [this.formModel.email,[ Validators.required, this.emailValidator]],
//       password: [this.formModel.password,[ Validators.required, this.passwordValidator]],
//       role: [this.formModel.userType,[ Validators.required,this.validateRole]],
//       username: [this.formModel.username,[ Validators.required]],
//   });
// }

// ngOnInit(): void {
// }
// passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   const password = control.value;
//   const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
 
 
//   if (!regexPattern.test(password)) {
//     return { invalidPassword: true };
//   }
 
//   return null;
// }

// validateRole(control: any) 
//   {
//     return control.value === 'Choose Role' ? { invalidRole: true } : null;
//   }

// emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   const email = control.value;
//   const regexPattern = /^[a-z][a-z0-9._%+-]*@[a-z2-9.-]+\.[a-z]{2,4}$/;
//   if (!regexPattern.test(email)) {
//     return { invalidEmail: true };
//   }
 
//   return null;
// }
// onRegister()
// {
//   if(this.itemForm.valid)
//   {
//     this.showError=false;
//     this.showMessage=false;
//     this.httpService.registerUser(this.itemForm.value).subscribe(data=>{
//       this.showMessage=true;
//       this.responseMessage='Hi '+data.name +", you have successfully registered!";
//       this.itemForm.reset();
      
//     },error=>{
//       this.showError=true;
//       this.errorMessage=error.error})
//   }
//   else{
//     this.itemForm.markAllAsTouched();
//   }
// }




itemForm!: FormGroup;

  // Flags for success/error messages
  showMessage: boolean = false;
  responseMessage: string = '';
  showError: boolean = false;
  errorMessage: string = '';

  // Roles dropdown
  roles: string[] = ['BUSINESS', 'DRIVER', 'CUSTOMER'];

  // Password checklist booleans
  passwordCriteria = {
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  };

  // Controls whether the checklist is visible
  showPasswordChecklist = false;

  constructor(
    public router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {
    // Initialize the form group with custom validators
    this.itemForm = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator]],
      password: ['', [Validators.required, this.passwordValidator]],
      role: ['', [Validators.required, this.validateRole]],
      username: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.itemForm.get('password')?.valueChanges.subscribe((password: string) => {
      this.passwordCriteria.hasMinLength    = password?.length >= 8;
      this.passwordCriteria.hasUpperCase    = /[A-Z]/.test(password);
      this.passwordCriteria.hasLowerCase    = /[a-z]/.test(password);
      this.passwordCriteria.hasNumber       = /[0-9]/.test(password);
      this.passwordCriteria.hasSpecialChar  = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    });
  }

  /**
   * Show the password checklist when the password field is focused.
   */
  onPasswordFocus(): void {
    this.showPasswordChecklist = true;
  }

  /**
   * Hide the password checklist on blur.
   * (If you prefer to keep it open after typing, 
   *  only hide it if the field is empty.)
   */
  onPasswordBlur(): void {
    this.showPasswordChecklist = false;
    // If you only want to hide if empty, use:
    // if (!this.itemForm.get('password')?.value) {
    //   this.showPasswordChecklist = false;
    // }
  }

  /**
   * Custom validator for password:
   * Requires 8 chars, uppercase, lowercase, digit, special char.
   */
  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!regexPattern.test(password)) {
      return { invalidPassword: true };
    }
    return null;
  }

  /**
   * Custom validator to ensure a role is chosen.
   */
  validateRole(control: AbstractControl) {
    return control.value === '' ? { invalidRole: true } : null;
  }

  /**
   * Custom email validator
   * (Example: must start with a letter, then letters/numbers, etc.)
   */
  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const regexPattern = /^[a-z][a-z0-9._%+-]*@[a-z2-9.-]+\.[a-z]{2,4}$/;
    if (!regexPattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  }

  /**
   * Submit handler for registration form
   */
  onRegister(): void {
    if (this.itemForm.valid) {
      this.showError = false;
      this.showMessage = false;
      // Call your register service
      this.httpService.registerUser(this.itemForm.value).subscribe({
        next: (data: any) => {
          this.showMessage = true;
          this.responseMessage = 'Hi ' + data.name + ', you have successfully registered!';
          this.itemForm.reset();
        },
        error: (error: any) => {
          this.showError = true;
          this.errorMessage = error.error;
        }
      });
    } else {
      // Trigger validation messages on all fields
      this.itemForm.markAllAsTouched();
    }
  }
}