import { Routes } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'clientes', component: ListadoClientesComponent}
];
