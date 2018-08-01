import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservaRestauranteComponent } from './reserva-restaurante/reserva-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaRestauranteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
