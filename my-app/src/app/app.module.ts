import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReservaRestauranteComponent } from './reserva-restaurante/reserva-restaurante.component';

import { ReservaHotelComponent } from './reserva-hotel/reserva-hotel.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservaRestauranteComponent,
    ReservaHotelComponent,
    LoginComponent,
    RegistroComponent,
    ForgotpassComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
