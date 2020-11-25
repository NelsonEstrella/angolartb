import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ReservareporteComponent } from './reserva/reservareporte.component';

export const Router : Routes = [
{
  path: '', component: InicioComponent
},
{
  path: 'inicio', component: InicioComponent
  },
  {
    path: 'habitacion', component: HabitacionComponent
  },
  {
    path: 'nosotros', component: NosotrosComponent
  },
  {
    path: 'contactenos', component: ContactenosComponent
  },
  {
    path: 'reserva/:id/:fecha_ingreso/:fecha_salida', component: ReservaComponent
  },
  {
    path: 'reserva', component: ReservaComponent
  },
  {
    path: 'reserva/admin', component: ReservareporteComponent
  }
  ];

export const AppRoutingModule : ModuleWithProviders = 
RouterModule.forRoot(Router);