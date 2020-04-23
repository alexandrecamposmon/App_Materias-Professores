import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemComponent} from './paginas/listagem/listagem.component';
import {DashboardComponent} from './paginas/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo:"/listagem", pathMatch:"full"},
  { path: 'listagem', component: ListagemComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
