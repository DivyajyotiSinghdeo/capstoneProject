import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RegistrationComponent } from './registration/registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AddcargoComponent } from './addcargo/addcargo.component';
import { AssginCargoComponent } from './assgin-cargo/assgin-cargo.component';
import { ViewcargostatusComponent } from './viewcargostatus/viewcargostatus.component';
<<<<<<< HEAD
import { AssignShipmentComponent } from './assignShipment/assign-shipment/assign-shipment.component';
import { FooterComponent } from './footer/footer/footer.component';
=======
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      RegistrationComponent,
      DashbaordComponent,
      AddcargoComponent,
      AssginCargoComponent,
<<<<<<< HEAD
      ViewcargostatusComponent,
      AssignShipmentComponent,
      FooterComponent
=======
      ViewcargostatusComponent
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [HttpService,HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
