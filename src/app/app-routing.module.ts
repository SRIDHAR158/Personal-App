import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuelComponent} from './fuel/fuel.component';


const routes: Routes = [{path:'fuel', component: FuelComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FuelComponent]
