import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [
  { path: '', component: HomeClienteComponent },
  { path: 'cadastro-cliente', component: FormularioClienteComponent },
  { path: 'lista-cliente', component: ClienteCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormularioClienteComponent];
