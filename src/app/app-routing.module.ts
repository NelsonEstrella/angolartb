import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

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
}
];

export const AppRoutingModule : ModuleWithProviders = 
RouterModule.forRoot(Router);