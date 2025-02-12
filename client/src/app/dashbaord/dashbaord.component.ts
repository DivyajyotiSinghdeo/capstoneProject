import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../../services/auth.service';
=======
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit{
<<<<<<< HEAD
  roleName:string|null;

  constructor(private authService:AuthService){
    this.roleName=authService.getRole;
  }

  ngOnInit(): void {
    
  }

  

=======

  ngOnInit(): void {
  }

>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561



}
