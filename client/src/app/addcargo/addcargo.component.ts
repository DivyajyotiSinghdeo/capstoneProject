import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-addcargo',
  templateUrl: './addcargo.component.html',
  styleUrls: ['./addcargo.component.css']
})
export class AddcargoComponent{
  itemForm: FormGroup;
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  showMessage: any;
  responseMessage: any;
  showMessageBox:boolean=false;
  minDate:any;


 
  
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      this.itemForm = this.formBuilder.group({
        content: [this.formModel.username,[ Validators.required]],
        size: [this.formModel.password,[ Validators.required, Validators.min(1)]],
        status: [this.formModel.password,[ Validators.required]],
       
    });
  }
  
  
  
 
  onSubmit()
  {
    if(this.itemForm.valid)
    {
      if (this.itemForm.valid) {
        this.showError = false;
    const popup = document.getElementById("submitPopup");
    popup?.classList.add("show");
    popup!.textContent = "Creating...";
        this.httpService.addCargo(this.itemForm.value).subscribe((data: any) => {
          this.itemForm.reset();
          popup!.textContent = "Shipment created successfully!";
        setTimeout(() => {
          popup?.classList.remove("show");
        }, 5000);
          
        }, error => {
          this.showError = true;
          this.errorMessage = "An error occurred while logging in. Please try again later.";
          console.error('Login error:', error);
        });;
      } else {
        this.itemForm.markAllAsTouched();
      }
    }
    else{
      this.itemForm.markAllAsTouched();
    }
  }


  dateValidator(control: AbstractControl): ValidationErrors | null {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(control.value)) {
      return { invalidDate: true };
    }
    return null;
}


 
  
}