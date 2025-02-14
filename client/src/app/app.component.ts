import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  IsLoggin:any=false;
  roleName!: string | null;
  showNavbarFooter:boolean = true; 
  constructor(private authService: AuthService, private router:Router)
  {
    debugger;
    this.IsLoggin=authService.getLoginStatus;
    this.roleName=authService.getRole;
    if(this.IsLoggin==false)
    {
      this.router.navigateByUrl('/login'); 
    
    }

    this.router.events.subscribe(event => {      
      if (event instanceof NavigationEnd) {        
        this.showNavbarFooter = !this.router.url.includes('\home');      
      }   
     }); 
  }
  logout()
{
  this.authService.logout();
  window.location.reload();
}
  
    
}