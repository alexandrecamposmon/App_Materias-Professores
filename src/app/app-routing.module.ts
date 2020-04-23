import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemComponent} from './paginas/listagem/listagem.component';
import {DashboardComponent} from './paginas/dashboard/dashboard.component';
import {AvisosComponent} from './paginas/avisos/avisos.component';


export const routes: Routes = [
  { path: '', redirectTo:"/listagem", pathMatch:"full"},
  { path: 'listagem', component: ListagemComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'aviso', component: AvisosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
