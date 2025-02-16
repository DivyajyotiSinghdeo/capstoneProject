import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})

export class ShipmentsComponent{
  username:any;
   showError:boolean = false;  
   errorMessage: any;  
   cargList: any = [];  
   assignModel: any = {};  
   driverList: any = [];  
   showMessage: any;  
   responseMessage: any;  
   showMessageBox: boolean = false;  
   searchQuery: string = '';  
   selectedStatus: string = '';  
   
   constructor(public router: Router, public httpService: HttpService,private authService:AuthService) {}  
   ngOnInit(): void {   
    this.username=this.authService.getUsername;
     this.getCargo();    
     this.getDrivers();    
     this.assignModel.driverId = null;  
    }  
    
    getCargo() {    
      this.cargList = [];    
      this.httpService.getCargo().subscribe((data: any) => {      
        this.cargList = data;      
        console.log(this.cargList);    
      }, 
      error => {      
        this.showError = true;      
        this.errorMessage = "An error occurred while logging in. Please try again later.";      
        console.error('Login error:', error);    
      });  }  getDrivers() {    
        this.driverList = [];    
        this.httpService.getDrivers().subscribe((data: any) => {      
          this.driverList = data;      
          console.log(this.driverList);    
        }, error => {      
          this.showError = true;      
          this.errorMessage = "An error occurred while logging in. Please try again later.";      
          console.error('Login error:', error);    
        });  
      }  
          
          addDriver(value: any) {    
            this.assignModel.cargoId = value.id;    
            this.clearMessages();  }  clearMessages() {    
              this.showMessage = false;    
              this.showError = false;    
              this.responseMessage = '';    
              this.errorMessage = '';  }  
              assignDriver() {    
                if (this.assignModel.driverId != null) {      
                  this.showMessage = false;      
                  this.responseMessage = '';      
                  this.httpService.assignDriver(this.assignModel.driverId, this.assignModel.cargoId).subscribe((data: any) => {        
                    this.showMessage = true;        
                    this.responseMessage = data.message;        
                    const cargo = this.cargList.find((c: { id: any; }) => c.id === this.assignModel.cargoId);        
                    if (cargo) {          
                      cargo.assigned = true;        
                    }      
                  }, error => {        
                    this.showError = true;        
                    this.errorMessage = "An error occurred while logging in. Please try again later.";        
                    console.error('Login error:', error);      
                  });    
                }  
              }
}