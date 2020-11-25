import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { ReservaComponent } from './reserva/reserva.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservareporteComponent } from './reserva/reservareporte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    HabitacionComponent,
    NosotrosComponent,
    ContactenosComponent,
    ReservaComponent,
    ReservareporteComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule, FormsModule,
     ReactiveFormsModule,
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
