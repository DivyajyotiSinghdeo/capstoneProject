import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-viewcargostatus',
  templateUrl: './viewcargostatus.component.html',
  styleUrls: ['./viewcargostatus.component.scss']
})
export class ViewcargostatusComponent { 
  cargo:any = {};  
  showError: boolean = false;  
  errorMessage: string = '';  
  cargoIdMd: any;  
  cargoDetails: any = {};  
  searchPerformed: boolean = false;  
  showCargoInfo: boolean = false;  
  
  constructor(public router: Router, public httpService: HttpService, private authService: AuthService) {}  
  
  search() {    
    this.showError = false;    
    this.searchPerformed = false;    
    this.showCargoInfo = false;    
    if (this.cargoIdMd != null) {      
      this.cargo = {};      
      this.httpService.getOrderStatus(this.cargoIdMd).subscribe(        
        (data: any) => {          
          this.cargo = data;          
          console.log(this.cargo);          
          this.searchPerformed = true;          
          this.showCargoInfo = true;        
        },        
        (error) => {          
          this.showError = true;          
          this.errorMessage = "An error occurred while searching. Please try again later or no record found";          
          console.error('Search error:', error);         
           this.searchPerformed = true;        
          });      
          this.httpService.getCargoDetails(this.cargoIdMd).subscribe(        
            (data) => {          
              this.cargoDetails = data;        
            },        
            (error) => {          
              this.showError = true;          
              this.errorMessage = "An error occurred while getting cargo by id. Please try again later or no record found";          
              console.error('Cargo details error:', error);         
               this.searchPerformed = true;      
               }      
               );    
              }  
            }
  
    

}