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
itemForm!: FormGroup;
  showMessage: boolean = false;
  responseMessage: string = '';
  showError: boolean = false;
  errorMessage: string = '';

  roles: string[] = ['BUSINESS', 'DRIVER', 'CUSTOMER'];

  passwordCriteria = {
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  };

  showPasswordChecklist = false;

  constructor(
    public router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {
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

  onPasswordFocus(): void {
    this.showPasswordChecklist = true;
  }

 
  onPasswordBlur(): void {
    this.showPasswordChecklist = false;
  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!regexPattern.test(password)) {
      return { invalidPassword: true };
    }
    return null;
  }

  validateRole(control: AbstractControl) {
    return control.value === '' ? { invalidRole: true } : null;
  }

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const regexPattern = /^[a-z][a-z0-9._%+-]*@[a-z2-9.-]+\.[a-z]{2,4}$/;
    if (!regexPattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  }

  onRegister(): void {
    if (this.itemForm.valid) {
      this.showError = false;
      this.showMessage = false;
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
      this.itemForm.markAllAsTouched();
    }
  }
}