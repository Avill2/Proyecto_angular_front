import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { ReservaRestauranteComponent } from './reserva-restaurante/reserva-restaurante.component';
//import { InicioComponent } from './inicio/inicio.component';

import { ReservaHotelComponent } from './reserva-hotel/reserva-hotel.component';
import { LoginComponent } from './login/login.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaRestauranteComponent,
    ReservaHotelComponent,
    LoginComponent,
    SeleccionComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
