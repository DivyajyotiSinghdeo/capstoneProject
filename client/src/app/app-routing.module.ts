import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AddcargoComponent } from './addcargo/addcargo.component';
import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AssginCargoComponent } from './assgin-cargo/assgin-cargo.component';
import { ViewcargostatusComponent } from './viewcargostatus/viewcargostatus.component';
<<<<<<< HEAD
import { AssignShipmentComponent } from './assignShipment/assign-shipment/assign-shipment.component';
=======
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'addcargo', component: AddcargoComponent },  
  { path: 'asgin-cargo', component: AssginCargoComponent },  
  { path: 'viewcargostatus', component: ViewcargostatusComponent },  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
<<<<<<< HEAD
  { path:'assignShipment', component:AssignShipmentComponent},
=======
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561

  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
