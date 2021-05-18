import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PreciosComponent} from "./components/precios/precios.component";
import {ProtegidaComponent} from "./components/protegida/protegida.component";
import {CallbackComponent} from "./components/callback/callback.component";
import { AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Precios', component: PreciosComponent},
  {path: 'Protegida', component: ProtegidaComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: '**', pathMatch:'full' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
