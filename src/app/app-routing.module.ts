import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {path: 'home' , component: HomeComponent},
  {path: 'agregar/:listaId' , component: AgregarComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






