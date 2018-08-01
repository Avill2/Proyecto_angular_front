import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservaHotelComponent } from './reserva-hotel/reserva-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaHotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
