import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReservaRestauranteComponent } from './reserva-restaurante/reserva-restaurante.component';

import { ReservaHotelComponent } from './reserva-hotel/reserva-hotel.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservaRestauranteComponent,
    ReservaHotelComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
